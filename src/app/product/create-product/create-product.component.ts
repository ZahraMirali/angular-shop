import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { firstValueFrom } from 'rxjs';
import { FileUploadService } from 'src/app/shared/fileupload.service';
import { ProductMaterial, ProductSize, ProductType } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';
import { CreateProductPreviewComponent } from './create-product-preview/create-product-preview.component';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  modalRef: MdbModalRef<CreateProductPreviewComponent> | null = null;
  imageFile: File
  keys = Object.keys;
  sizes = ProductSize;
  types = ProductType;
  materials = ProductMaterial
  isSubmitted = false

  imageId:string
  imageType = false

  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly modalService: MdbModalService,
    private readonly productService:ProductService

  ) { }
  createProductForm: FormGroup

  ngOnInit(): void {






    this.createProductForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, Validators.required),
      'brand': new FormControl(null, Validators.required),
      'size': new FormControl(ProductSize.MEDIUM, Validators.required),
      'marketPrice': new FormControl(null, Validators.required),
      'salePrice': new FormControl(null, Validators.required),
      'material': new FormControl(ProductMaterial.A, Validators.required),
      'type': new FormControl(ProductType.B, Validators.required),
      'isUpload': new FormControl(true),
      'imageUrl': new FormControl(null, Validators.required),
      'imageId': new FormControl(null, Validators.required),

    })


  }

  onChangeImage(event) {
    this.imageFile = event.target.files[0];
  }


  async onUploadImage() {

    const responseUploadFile$ = this.fileUploadService.upload(this.imageFile)


    try {

      const imageFileMetadata = await firstValueFrom(responseUploadFile$)

      this.imageId=imageFileMetadata.id
      this.createProductForm.patchValue({
        'imageUrl': 'http://localhost:8090/files/' +this.imageId,
        'imageId':this.imageId
      })
    } catch (err) {

      console.log(err)
    }
  }



  changeSize(e) {
    this.sizeName.setValue(e.target.value, {
      onlySelf: true
    })
  }


  changeType(e) {
    this.typeName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeMaterial(e) {
    this.materialName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get sizeName() {
    return this.createProductForm.get('size');
  }

  get typeName() {
    return this.createProductForm.get('type');
  }


  get materialName() {
    return this.createProductForm.get('material');
  }

  onSubmit() {

    this.isSubmitted = true

    this.modalRef = this.modalService.open(CreateProductPreviewComponent, {
      modalClass: 'modal-xl modal-dialog-centered',
      data: { form: this.createProductForm }

    })

    this.modalRef.onClose.subscribe(async (imageId: string) => {

      if (imageId) {

        const response$ = this.productService.createProduct(
          this.createProductForm.get('name').value,
          this.createProductForm.get('description').value,
          this.createProductForm.get('type').value,
          this.createProductForm.get('material').value,
          this.createProductForm.get('brand').value,
          this.createProductForm.get('size').value,
          this.createProductForm.get('marketPrice').value,
          this.createProductForm.get('salePrice').value,
          "http://localhost:8090/files/" + imageId,
          imageId
         )
        const saved = await firstValueFrom(response$)
        this.createProductForm.reset()
      }

    })
  }

  

}
