import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('box', [
      state('normal', style({
        transform: 'translateX(0%) scale(1)'
      })),
      state('scaledRight', style({
        transform: 'translateX(30%) scale(1.2)',
        'border-width': '2px',
        'border-style': 'solid',
        'border-image': 'linear-gradient(to right,#5bd9ef,#ffffff,#5bd9ef,#ffffff)4',

        'background-color': 'rgba(31, 131, 74, 1)',
        'z-index':'1'


  

      })),
      state('scaledLeft', style({
        transform: 'translateX(-30%) scale(1.2)',
        'border-width': '2px',
        'border-style': 'solid',
        'border-image': 'linear-gradient(to right,#5bd9ef,#ffffff,#5bd9ef,#ffffff)4',
        'background-color': 'rgba(31, 131, 74, 1)',
        'z-index':'1'

      })),
      state('unScaledLeft', style({
        transform: 'translateX(-30%) scale(0.8)'
      })),
      state('unScaledRight', style({
        transform: 'translateX(30%) scale(0.8)'
      })),
      transition('*<=>*', animate(300)),
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  state1 = 'normal'
  state2 = 'normal'


  onMouseOver1() {
    this.state1 = 'scaledRight'
    this.state2 = 'unScaledLeft'
  }
  onMouseOut1() {
    this.state1 = 'normal'
    this.state2 = 'normal'
  }

  onMouseOver2() {
    this.state1 = 'unScaledRight'
    this.state2 = 'scaledLeft'
  }
  onMouseOut2() {
    this.state1 = 'normal'
    this.state2 = 'normal'
  }

  ngOnInit(): void {
  }

}
