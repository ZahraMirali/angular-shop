import { Component, Input, OnInit } from '@angular/core';
import { Template } from '../../template.model';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.scss']
})
export class TemplateItemComponent implements OnInit {

  @Input()
  template!: Template;

  constructor() { }

  ngOnInit(): void {
  }

}
