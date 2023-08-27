import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { RoomsceneService } from 'src/app/shared/roomscene.service';

@Component({
  selector: 'app-roomscene-product-detail',
  templateUrl: './roomscene-product-detail.component.html',
  styleUrls: ['./roomscene-product-detail.component.scss']
})
export class RoomsceneProductDetailComponent implements OnInit {

  product!: Product
  constructor(private readonly roomsceneService: RoomsceneService) { }

  ngOnInit(): void {

    this.roomsceneService.roomSceneProductChanged.subscribe((product: Product) => {

      this.product = product

    })


  }

}
