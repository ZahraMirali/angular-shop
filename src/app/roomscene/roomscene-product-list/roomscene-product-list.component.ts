import { ChangeContext, LabelType, Options, PointerType } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Observable, debounceTime, distinctUntilChanged, filter, firstValueFrom, map, startWith, switchMap } from 'rxjs';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { RoomsceneService } from 'src/app/shared/roomscene.service';
import { RoomsceneColorpickerComponent } from './roomscene-colorpicker/roomscene-colorpicker.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-roomscene-product-list',
  templateUrl: './roomscene-product-list.component.html',
  styleUrls: ['./roomscene-product-list.component.scss'],

})
export class RoomsceneProductListComponent implements OnInit {




  selectedTabValue = "name"
  form: FormGroup;
  colorCombine = false;
  priceSort = "Ascending"
  nameInput: string;
  brandInput: string

  selectedFields = [
  ]

  selectedColors = []

  colors = [
    "#404040", "#663300", "#cc0000", "#ff00ff", "#666699", "#66ffff", "#99ff99", "#999966", "#cc8800", "#ffcc00", "#ecd8c6", "#ffffff",

    "#331a00", "#4d1a00", "#993333", "#ff3399", "#006699", "#00ccff", "#00ff00", "#999900", "#996633", "#ff9933", " #d9b38c", "#ffdd99",

    "#130606", "#660033", "#800000", "#993366", "#333399", "#0066ff", "#00cc00", "#666633", "#ff6600", "#ffff00", "#c68c53", "#999999"

  ]

  modalRef: MdbModalRef<RoomsceneColorpickerComponent> | null = null;
  floor = 0;
  ceil = 1000
  staticProducts: Product[]
  products: Product[]
  total = 0;
  filter = false
  pointer = 0;
  minValue: number = this.floor;
  maxValue: number = this.ceil;
  options: Options = {
    floor: this.floor,
    ceil: this.ceil,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>from</b> $' + value;
        case LabelType.High:
          return '<b>to</b> $' + value;
        default:
          return '$' + value;
      }
    }
  }

  nameControl = new FormControl('');
  brandControl = new FormControl('');
  nameFilteredOptions: Observable<string[]>;
  brandFilteredOptions: Observable<string[]>;

  constructor(private readonly productService: ProductService,
    private modalService: MdbModalService,
    private readonly roomsceneService: RoomsceneService) { }

  async ngOnInit() {

    this.nameFilteredOptions = this.nameControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(1000),
      filter((name) => !!name),
      switchMap(name => this.getNameFiltered(name))
    );

    this.brandFilteredOptions = this.brandControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap(name => this.getBrandFiltered(name))
    );



    const staticProducts$ = this.productService.getAllProducts();

    this.staticProducts = await firstValueFrom(staticProducts$)

    this.total = this.staticProducts.length
    this.products = JSON.parse(JSON.stringify(this.staticProducts.slice(this.pointer, 6)))



  }

  private async getNameFiltered(value: string) {
    const filterValue = value.toLowerCase();
    const filteredNames$ = this.productService.getFilteredNames(filterValue)
    const values: string[] = await firstValueFrom(filteredNames$)
    return values

  }
  private async getBrandFiltered(value: string) {
    if (value == '') {
      value = "***"
    }
    const filterValue = value.toLowerCase();
    const filteredNames$ = this.productService.getFilteredBrands(filterValue)
    const values: string[] = await firstValueFrom(filteredNames$)
    return values

  }

  isFilter(event) {
    console.log(this.filter)
    this.filter = event

  }

  getBackProducts() {
    if (this.pointer - 6 >= 0) {

      this.pointer = this.pointer - 6
      this.products = JSON.parse(JSON.stringify(this.staticProducts.slice(this.pointer, this.pointer + 6)))
    }
  }

  getNextProducts() {
    if (this.pointer + 6 < this.total) {

      this.pointer = this.pointer + 6
      this.products = JSON.parse(JSON.stringify(this.staticProducts.slice(this.pointer, this.pointer + 6)))
    }

  }

  productSelected(product) {
    this.roomsceneService.onRoomSceneProductChanged(product)
  }

  endProducts() {
    this.pointer = this.total - 6
    this.products = JSON.parse(JSON.stringify(this.staticProducts.slice(this.pointer, this.pointer + 6)))
  }

  firstProducts() {
    this.pointer = 0;
    this.products = JSON.parse(JSON.stringify(this.staticProducts.slice(this.pointer, 6)))

  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    let values = this.getChangeContextString(changeContext);
    console.log(values)
  }

  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
      `min: ${changeContext.value}, ` +
      `max: ${changeContext.highValue}}`;
  }

  openColors() {
    this.modalRef = this.modalService.open(RoomsceneColorpickerComponent)

  }
  onSelectedTab(value) {
    this.selectedTabValue = value
  }
  onColorSelected(color) {



    let found = false
    for (let i = 0; i < this.selectedColors.length; i++) {
      if (this.selectedColors[i] === color) {
        this.selectedColors.splice(i, 1);
        found = true
      }
    }
    if (!found) {
      if (this.selectedColors.length >= 4)
        return alert("you can only select 4 color")
      else {

        this.selectedColors.push(color)
      }
    }

  }

  isColorSelected(color) {

    console.log()
    if (this.selectedColors.find(item => item === color))
      return 'btn-color-selected'
    else
      return ''

  }
  deleteSelectedColor(color) {


    for (let i = 0; i < this.selectedColors.length; i++) {
      if (this.selectedColors[i] === color) {
        this.selectedColors.splice(i, 1);
      }
    }

  }

  deleteAllSelectedColors() {
    for (let i = 0; i < this.selectedFields.length; i++) {
      if (this.selectedFields[i].key == "color") {
        this.selectedFields.splice(i, 1)
      }
    }
    this.selectedColors = []
  }
  onColorConfirm() {

    for (let i = 0; i < this.selectedFields.length; i++) {
      if (this.selectedFields[i].key == "color") {
        this.selectedFields.splice(i, 1)
      }
    }

    this.selectedFields.push({ key: "color", values: JSON.parse(JSON.stringify(this.selectedColors)), options: { colorCombine: JSON.parse(JSON.stringify(this.colorCombine)) } },)

  }

  onPriceSort(value) {
    this.priceSort = value

  }
  onPriceConfirm() {
    for (let i = 0; i < this.selectedFields.length; i++) {
      if (this.selectedFields[i].key == "price") {
        this.selectedFields.splice(i, 1)
      }
    }
    this.selectedFields.push({
      key: "price", values: [this.minValue, this.maxValue], options: {
        priceSort: this.priceSort
      }
    })

  }
  onRemovePrice() {
    for (let i = 0; i < this.selectedFields.length; i++) {
      if (this.selectedFields[i].key == "price") {
        this.selectedFields.splice(i, 1)
      }
    }
  }

  onRemoveName() {

    this.nameInput = '';
    this.brandInput = '';
    for (let i = 0; i < this.selectedFields.length; i++) {
      if (this.selectedFields[i].key == "name") {
        this.selectedFields.splice(i, 1)
      }
    }

    for (let i = 0; i < this.selectedFields.length; i++) {
      if (this.selectedFields[i].key == "brand") {
        this.selectedFields.splice(i, 1)
      }
    }

  }
  onNameConfirm() {

    for (let i = 0; i < this.selectedFields.length; i++) {
      if (this.selectedFields[i].key == "name") {
        this.selectedFields.splice(i, 1)
      }
    }

    for (let i = 0; i < this.selectedFields.length; i++) {
      if (this.selectedFields[i].key == "brand") {
        this.selectedFields.splice(i, 1)
      }
    }


    if (this.nameInput && this.nameInput != '') {
      this.selectedFields.push({
        key: "name", values: [this.nameInput],
      })
    }

    if (this.brandInput && this.brandInput != '') {
      this.selectedFields.push({
        key: "brand", values: [this.brandInput],
      })
    }


  }



}
