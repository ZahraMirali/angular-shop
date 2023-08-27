import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { firstValueFrom, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/product.model';
import { RoomsceneService } from 'src/app/shared/roomscene.service';
import { Template } from 'src/app/template/template.model';
import { TemplateService } from 'src/app/template/template.service';

@Component({
  selector: 'app-roomscene-template',
  templateUrl: './roomscene-template.component.html',
  styleUrls: ['./roomscene-template.component.scss']
})
export class RoomsceneTemplateComponent implements OnInit, OnDestroy {

  productChangeSub: Subscription

  @Input() template!: Template
  constructor(private readonly roomsceneService: RoomsceneService) { }


  ngOnInit(): void {

    this.productChangeSub = this.roomsceneService.roomSceneProductChanged.subscribe(async (product: Product) => {

      console.log(product)


      const response$ = this.roomsceneService.getPreview(this.template.psdFileId, product.imageId)

      this.template.imageUrl = await firstValueFrom(response$)




    })



  }


  ngOnDestroy(): void {

    this.productChangeSub.unsubscribe()

  }

}
