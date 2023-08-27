import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { firstValueFrom, fromEvent, skipUntil, takeUntil } from 'rxjs';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-create-product-preview',
  templateUrl: './create-product-preview.component.html',
  styleUrls: ['./create-product-preview.component.scss']
})
export class CreateProductPreviewComponent implements OnInit, AfterViewInit {

  form: FormGroup
  appliedimageId: string
  sub: any
  element: Element;
  root: Element;
  canvas;
  box: any
  rectangle: Rectangle;
  private context: CanvasRenderingContext2D;
  contextCoordinate: {
    zerozero: { x: number, y: number },
    zeroy: { x: number, y: number },
    xzero: { x: number, y: number },
    xy: { x: number, y: number },
  }

  appliedImageUrl
  mousedown$;
  mouseup$;
  offsetWidth;
  offsetHeight

  @ViewChild('canvas') canvasEl: ElementRef;

  constructor(public modalRef: MdbModalRef<CreateProductPreviewComponent>,
    private productService: ProductService,
    public renderer: Renderer2
  ) { }
  ngAfterViewInit(): void {

    this.box = this.renderer.selectRootElement('#canvas');

    this.canvasEl.nativeElement.width = 600
    this.canvasEl.nativeElement.height = 800

    this.context = (
      this.canvasEl.nativeElement as HTMLCanvasElement
    ).getContext('2d');


    this.rectangle = new Rectangle()

    this.mousedown$ = fromEvent(this.box, 'mousedown');
    this.mouseup$ = fromEvent(this.box, 'mouseup');
    this.mouseup$.subscribe(_ => {
      this.register();
    })
    this.mousedown$.subscribe(_ => {
      console.log('clicked');
    });
    this.register();




  }
  ngOnInit(): void {
    this.appliedImageUrl = this.form.get('imageUrl').value
  }


  getPosition(event) {

    this.offsetWidth = event.target.offsetWidth
    this.offsetHeight = event.target.offsetHeight

    this.contextCoordinate = {
      zerozero: { x: 0, y: 0 },
      xzero: { x: event.target.offsetWidth, y: 0 },
      zeroy: { x: 0, y: event.target.offsetHeight },
      xy: { x: event.target.offsetWidth, y: event.target.offsetHeight },
    }

    const type = this.minType({ x: event.offsetX, y: event.offsetY });

    this.rectangle.addCoordinate(event.offsetX, event.offsetY, type)

    this.drowCoordinateAndLines(event.target.offsetWidth, event.target.offsetHeight)

    console.log(event.offsetX, event.offsetY)

    console.log(this.rectangle.coordinates)

  }

  drowCoordinateAndLines(offsetWidth, offsetHeight) {

    this.context = (
      this.canvasEl.nativeElement as HTMLCanvasElement
    ).getContext('2d');
    this.context.clearRect(0, 0, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height)




    for (let key in this.rectangle.lines) {

      if (this.rectangle.lines[key]) {


        this.context.beginPath();
        const x1 = this.rectangle.lines[key].from.x * this.canvasEl.nativeElement.width / offsetWidth
        const y1 = this.rectangle.lines[key].from.y * this.canvasEl.nativeElement.height / offsetHeight

        const x2 = this.rectangle.lines[key].to.x * this.canvasEl.nativeElement.width / offsetWidth
        const y2 = this.rectangle.lines[key].to.y * this.canvasEl.nativeElement.height / offsetHeight
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);


        const gradient = this.context.createLinearGradient(x1, y1, x2, y2);

        gradient.addColorStop(0, "#66ccff");
        gradient.addColorStop(0.2, "#ccffff");
        gradient.addColorStop(0.5, "cyan");
        gradient.addColorStop(0.8, "#ccffff");
        gradient.addColorStop(1, "#66ccff");

        // Fill with gradient
        this.context.strokeStyle = gradient;
        this.context.lineWidth = 8;

        this.context.stroke();
      }

    }

    for (let coordinate of this.rectangle.coordinates) {


      this.context.fillStyle = "black"
      this.context.beginPath();
      this.context.arc(coordinate.x * this.canvasEl.nativeElement.width / offsetWidth,
        coordinate.y * this.canvasEl.nativeElement.height / offsetHeight,
        10, 0, Math.PI * 2, true);
      this.context.fill();


      this.context.fillStyle = "#ffffff"
      this.context.beginPath();
      this.context.arc(coordinate.x * this.canvasEl.nativeElement.width / offsetWidth,
        coordinate.y * this.canvasEl.nativeElement.height / offsetHeight,
        8, 0, Math.PI * 2, true);
      this.context.fill();

      this.context.fillStyle = "black"
      this.context.beginPath();
      this.context.arc(coordinate.x * this.canvasEl.nativeElement.width / offsetWidth,
        coordinate.y * this.canvasEl.nativeElement.height / offsetHeight,
        6, 0, Math.PI * 2, true);
      this.context.fill();

      this.context.fillStyle = "#ffffff"
      this.context.beginPath();
      this.context.arc(coordinate.x * this.canvasEl.nativeElement.width / offsetWidth,
        coordinate.y * this.canvasEl.nativeElement.height / offsetHeight,
        4, 0, Math.PI * 2, true);
      this.context.fill();










    }




  }


  minType({ x, y }) {

    console.log(this.contextCoordinate)

    let type = coordinateType.zerozero;

    let min;
    const diszerozero = Math.sqrt(Math.pow(x - this.contextCoordinate.zerozero.x, 2)) + (Math.pow(y - this.contextCoordinate.zerozero.y, 2));

    min = diszerozero
    const disxzero = Math.sqrt(Math.pow(x - this.contextCoordinate.xzero.x, 2)) + (Math.pow(y - this.contextCoordinate.xzero.y, 2));

    if (disxzero < min) {
      min = disxzero;
      type = coordinateType.xzero
    }


    const diszeroy = Math.sqrt(Math.pow(x - this.contextCoordinate.zeroy.x, 2)) + (Math.pow(y - this.contextCoordinate.zeroy.y, 2));


    if (diszeroy < min) {
      min = diszeroy;
      type = coordinateType.zeroy
    }


    const disxy = Math.sqrt(Math.pow(x - this.contextCoordinate.xy.x, 2)) + (Math.pow(y - this.contextCoordinate.xy.y, 2));

    if (disxy < min) {
      min = disxy;
      type = coordinateType.xy
    }

    console.log("zerozero", diszerozero)
    console.log("xzero", disxzero)
    console.log("zeroy", diszeroy)
    console.log("xy", disxy)

    return type

  }

  register() {
    try {
      this.sub.unsubscribe();
    } catch (err) {

    } finally {

    }

    let mousemove$ = fromEvent(this.box, 'mousemove');
    mousemove$ = mousemove$.pipe(skipUntil(this.mousedown$));
    mousemove$ = mousemove$.pipe(takeUntil(this.mouseup$));
    this.sub = mousemove$.subscribe((e: any) => {

      this.getPosition(e)
      console.log(e.x, e.y);
    })
  }



  async onSave() {



    this.modalRef.close(this.appliedimageId)

  }

  async applyImage() {


    const appliedImage$ = this.productService.applyImage(this.form.get("imageId").value, this.offsetWidth, this.offsetHeight, this.rectangle.zerozero, this.rectangle.xzero, this.rectangle.zeroy, this.rectangle.xy);

    const response = await firstValueFrom(appliedImage$)
    if (response) {

      this.context = (
        this.canvasEl.nativeElement as HTMLCanvasElement
      ).getContext('2d');
      this.context.clearRect(0, 0, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height)
      this.appliedimageId = response
      this.form.get("imageId").setValue(response)
      this.form.get("imageUrl").setValue("http://localhost:8090/files/" + this.appliedimageId)
      this.appliedImageUrl = "http://localhost:8090/files/" + this.appliedimageId

    }

  }



}

class Rectangle {

  constructor() {
    this.coordinates = []
    this.isComplete = false;

    this.lines = { one: null, two: null, three: null, four: null }
  }

  addCoordinate(x, y, type) {

    let old = false
    for (let item in this.coordinates) {

      if (this.coordinates[item].type == type) {
        this.coordinates[item] = { type: type, x: x, y: y }
        old = true
      }
    }
    if (!old) {
      this.coordinates.push({ type: type, x: x, y: y })
    }

    switch (type) {

      case coordinateType.zerozero:
        this.zerozero = { type: type, x: x, y: y }
        break
      case coordinateType.xzero:
        this.xzero = { type: type, x: x, y: y }
        break
      case coordinateType.zeroy:
        this.zeroy = { type: type, x: x, y: y }
        break
      case coordinateType.xy:
        this.xy = { type: type, x: x, y: y }
        break
    }

    this.updateLines()
  }

  updateLines() {

    if (this.zerozero && this.xzero) {
      this.lines.one = { from: this.zerozero, to: this.xzero }
    }

    if (this.zerozero && this.zeroy) {
      this.lines.two = { from: this.zerozero, to: this.zeroy }
    }

    if (this.xzero && this.xy) {
      this.lines.three = { from: this.xzero, to: this.xy }
    }

    if (this.zeroy && this.xy) {
      this.lines.four = { from: this.zeroy, to: this.xy }
    }

  }

  zerozero: coordinate;
  xzero: coordinate;
  zeroy: coordinate;
  xy: coordinate;


  coordinates: coordinate[];

  lines: {

    "one": {
      from: coordinate,
      to: coordinate
    },
    "two": {
      from: coordinate,
      to: coordinate
    },
    "three": {
      from: coordinate,
      to: coordinate
    },
    "four": {
      from: coordinate,
      to: coordinate
    }
  }

  isComplete: boolean


}

class coordinate {
  x: number
  y: number
  type: coordinateType
}
export enum coordinateType {
  zerozero = "zerozero",
  xzero = "xzero",
  zeroy = "zeroy",
  xy = "xy",
}

