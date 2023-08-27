import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { firstValueFrom } from 'rxjs';
import { FileUploadService } from 'src/app/shared/fileupload.service';
import { RoomsceneService } from 'src/app/shared/roomscene.service';
import { TemplateService } from '../template.service';
import { PreviewComponent } from './preview/preview.component';

@Component({
  selector: 'app-edit-psd',
  templateUrl: './edit-psd.component.html',
  styleUrls: ['./edit-psd.component.scss']
})
export class EditPsdComponent implements OnInit {


  modalRef: MdbModalRef<PreviewComponent> | null = null;

  saved = null

  templateData: {

    psdFile: File
    psdFileMetadata
    imageFile: File
    imageFileMetadata
    name: string
    description: string,
    imageUrl: string

  } = {
      psdFile: null,
      psdFileMetadata: null,
      imageFile: null,
      imageFileMetadata: null,
      name: '',
      description: '',
      imageUrl: null
    }


  constructor(private readonly fileUploadService: FileUploadService,
    private readonly modalService: MdbModalService,
    private readonly tmService: TemplateService,
    private readonly roomsceneService: RoomsceneService
  ) { }

  async openPreview() {

    if (this.templateData.psdFileMetadata && this.templateData.imageFileMetadata) {


      if (!this.templateData.imageUrl) {


        const response$ = this.roomsceneService.getPreview(this.templateData.psdFileMetadata.id, this.templateData.imageFileMetadata.id)

        this.templateData.imageUrl = await firstValueFrom(response$)
      }

      this.modalRef = this.modalService.open(PreviewComponent, {
        modalClass: 'modal-xl modal-dialog-centered',
        data: { templateData: this.templateData }
      })
    }

    this.modalRef.onClose.subscribe(async (saved: boolean) => {

      if (saved) {

        const response$ = this.tmService.saveTemplate(this.templateData.psdFileMetadata, this.templateData.imageFileMetadata, this.templateData.imageUrl, this.templateData.name, this.templateData.description)
        saved = await firstValueFrom(response$)
        console.log(saved)
      }

    })


  }



  ngOnInit(): void {
  }

  onChangePsd(event) {
    this.templateData.psdFile = event.target.files[0];

  }
  onChangeImage(event) {
    this.templateData.imageFile = event.target.files[0];

  }

  // OnClick of button Upload
  async onUploadPsd() {

    console.log(this.templateData)
    const responseUploadFile$ = this.fileUploadService.upload(this.templateData.psdFile)


    try {

      this.templateData.psdFileMetadata = await firstValueFrom(responseUploadFile$)
      console.log(this.templateData)
    } catch (err) {
      console.log(err)
    }
  }

  async onUploadImage() {


    const responseUploadFile$ = this.fileUploadService.upload(this.templateData.imageFile)

    this.templateData.imageFileMetadata = await firstValueFrom(responseUploadFile$)
  }


}
