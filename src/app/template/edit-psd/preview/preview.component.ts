import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

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



  constructor(public modalRef: MdbModalRef<PreviewComponent>
  ) { }



  ngOnInit(): void {
  }

  async onSave() {

    const saved = true

    this.modalRef.close(saved)

  }

}
