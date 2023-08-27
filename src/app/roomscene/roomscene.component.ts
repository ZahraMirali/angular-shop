import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { RoomsceneService } from '../shared/roomscene.service';
import { Template } from '../template/template.model';

@Component({
  selector: 'app-roomscene',
  templateUrl: './roomscene.component.html',
  styleUrls: ['./roomscene.component.scss'],
})
export class RoomsceneComponent implements OnInit {

  template:Template
  constructor(
    private readonly roomsceneService:RoomsceneService,
    private readonly activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(async (params) => {

    const response$ = this.roomsceneService.getTemplate(params["template-id"])

    this.template = await firstValueFrom(response$)

    })
  }


}
