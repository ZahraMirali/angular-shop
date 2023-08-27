import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { RoomsceneService } from 'src/app/shared/roomscene.service';

@Component({
  selector: 'app-roomscene-product-item',
  templateUrl: './roomscene-product-item.component.html',
  styleUrls: ['./roomscene-product-item.component.scss']
})
export class RoomsceneProductItemComponent implements OnInit {

  @Input()
  product!: Product;
  constructor(private readonly roomsceneService: RoomsceneService) { }

  ngOnInit(): void {
  }

  productSelected() {

    this.roomsceneService.onRoomSceneProductChanged(this.product)


  }

}
