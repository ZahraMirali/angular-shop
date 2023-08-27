import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-roomscene-colorpicker',
  templateUrl: './roomscene-colorpicker.component.html',
  styleUrls: ['./roomscene-colorpicker.component.scss']
})
export class RoomsceneColorpickerComponent implements OnInit {

   constructor(public modalRef: MdbModalRef<RoomsceneColorpickerComponent>) { }

  ngOnInit(): void {
  }

}
