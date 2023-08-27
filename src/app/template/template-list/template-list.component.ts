import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Template } from '../template.model';
import { GetDto, TemplateService } from '../template.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
  animations: getAnimations()

})
export class TemplateListComponent implements OnInit {

  fetchingData = false


  templates: Template[]
  staticTemplates: Template[]
  constructor(private readonly tmService: TemplateService) { }

  total = 0
  selectedIndex = 0;
  lastindex = 0
  stated = []

  onRight() {
    this.lastindex++

    console.log(this.staticTemplates)

    if (this.lastindex >= this.staticTemplates.length) {
      console.log('here')
      this.lastindex = 0
    }
    this.stated[2] = 'normal2-n'
    this.stated[1] = 'normal1-n'
    this.stated[3] = 'normal3-n'
    this.stated[4] = 'normal4-n'
    this.stated[0] = 'normal0-n'
    this.templates[0].imageUrl = this.staticTemplates[this.lastindex].imageUrl

    setTimeout(() => {

      this.templates[0].name = this.templates[1].name
      this.templates[0].description = this.templates[1].description
      this.templates[0]._id = this.templates[1]._id
      this.templates[0].imageUrl = this.templates[1].imageUrl

      this.templates[1].name = this.templates[2].name
      this.templates[1].description = this.templates[2].description
      this.templates[1]._id = this.templates[2]._id
      this.templates[1].imageUrl = this.templates[2].imageUrl

      this.templates[2].name = this.templates[3].name
      this.templates[2].description = this.templates[3].description
      this.templates[2]._id = this.templates[3]._id
      this.templates[2].imageUrl = this.templates[3].imageUrl

      this.templates[3].name = this.templates[4].name
      this.templates[3].description = this.templates[4].description
      this.templates[3]._id = this.templates[4]._id
      this.templates[3].imageUrl = this.templates[4].imageUrl

      this.templates[4].name = this.staticTemplates[this.lastindex].name
      this.templates[4].description = this.staticTemplates[this.lastindex].description
      this.templates[4]._id = this.staticTemplates[this.lastindex]._id
      this.templates[4].imageUrl = this.staticTemplates[this.lastindex].imageUrl

      this.stated[2] = 'normal2'
      this.stated[1] = 'normal1'
      this.stated[3] = 'normal3'
      this.stated[4] = 'normal4'
      this.stated[0] = 'normal0'

    }, 400)
  }
  onMouseOver(index) {
    let item = (index + this.lastindex - 5 + 2)
    if (item <= 0)
      item = item + this.total

    this.selectedIndex = item




    switch (index) {
      case 0: {
        this.stated[0] = '0big0'
        this.stated[1] = '0big1'
        this.stated[2] = '0big2'
        this.stated[3] = '0big3'
        this.stated[4] = '0big4'
        break
      }
      case 1: {
        this.stated[1] = '1big1'
        this.stated[0] = '1big0'
        this.stated[2] = '1big2'
        this.stated[3] = '1big3'
        this.stated[4] = '1big4'
        break
      }
      case 2: {
        this.stated[2] = '2big2'
        this.stated[1] = '2big1'
        this.stated[3] = '2big3'
        this.stated[0] = '2big0'
        this.stated[4] = '2big4'
        break
      }
      case 3: {
        this.stated[3] = '3big3'
        this.stated[2] = '3big2'
        this.stated[4] = '3big4'
        this.stated[1] = '3big1'
        this.stated[0] = '3big0'
        // setTimeout(() => {

        //   this.templates[0].name = this.templates[1].name
        //   this.templates[0].description = this.templates[1].description
        //   this.templates[0].imageUrl = this.templates[1].imageUrl

        //   this.templates[1].name = this.templates[2].name
        //   this.templates[1].description = this.templates[2].description
        //   this.templates[1].imageUrl = this.templates[2].imageUrl

        //   this.templates[2].name = this.templates[3].name
        //   this.templates[2].description = this.templates[3].description
        //   this.templates[2].imageUrl = this.templates[3].imageUrl

        //   this.templates[3].name = this.templates[4].name
        //   this.templates[3].description = this.templates[4].description
        //   this.templates[3].imageUrl = this.templates[4].imageUrl

        //   this.templates[4].name = this.templates[5].name
        //   this.templates[4].description = this.templates[5].description
        //   this.templates[4].imageUrl = this.templates[5].imageUrl


        //   // this.templates[1]=this.templates[2]
        //   // this.templates[2]=this.templates[3]
        //   // this.templates[3]=this.templates[4]
        //   // this.templates[4]=this.staticTemplates[0]


        // }, 1000)
        break
      }
      case 4: {

        this.stated[4] = '4big4'
        this.stated[3] = '4big3'
        this.stated[2] = '4big2'
        this.stated[1] = '4big1'
        this.stated[0] = '4big0'
        break
      }
    }



  }
  onMouseOut(index) {



    this.stated[2] = 'normal2'
    this.stated[1] = 'normal1'
    this.stated[3] = 'normal3'
    this.stated[0] = 'normal0'
    this.stated[4] = 'normal4'


  }

  async ngOnInit() {


    const staticTemplates$ = this.tmService.getTemplates();

    this.fetchingData = true
    this.staticTemplates = await firstValueFrom(staticTemplates$)

    console.log(this.staticTemplates)

    this.fetchingData = false
    this.total = this.staticTemplates.length
    this.templates = JSON.parse(JSON.stringify(this.staticTemplates.slice(0, 5)))
    this.lastindex = this.templates.length - 1


    const isMobile = matchMedia("(max-width: 800px)").matches;
    // this.staticTemplates = this.tmService.getTemplates()

    if (!isMobile) {


      this.stated[2] = 'normal2'
      this.stated[1] = 'normal1'
      this.stated[3] = 'normal3'
      this.stated[0] = 'normal0'
      this.stated[4] = 'normal4'
    }

  }

}

function getAnimations() {

  const animation = [
    trigger('templated', [
      state('normal2', style({
        transform: 'translateX(0%) scale(1)'
      })),
      state('normal2-n', style({
        transform: 'translateX(-100%) translateY(-20%) scale(0.8)'
      })),

      state('normal1', style({
        transform: 'translateY(-20%) scale(0.8)'
      })),

      state('normal1-n', style({
        transform: 'translateX(-80%) translateY(-50%) scale(0.6)'
      })),


      state('normal0', style({
        transform: 'translateX(20%) translateY(-50%) scale(0.6)'
      })),

      state('normal0-n', style({
        transform: 'translateX(380%) translateY(-50%) scale(0.6)'
      })),

      state('normal4', style({
        transform: 'translateX(-20%) translateY(-50%) scale(0.6)'
      })),

      state('normal4-n', style({
        transform: 'translateX(-100%) translateY(-20%) scale(0.8)'
      })),


      state('normal3', style({
        transform: 'translateY(-20%) scale(0.8)'
      })),

      state('normal3-n', style({
        transform: 'translateX(-100%)  scale(1)'
      })),




      state('2big1', style({
        transform: 'translateX(-30%) scale(0.8)'
      })),


      state('2big3', style({
        transform: 'translateX(30%) scale(0.8)'
      })),





      state('big', style({
        transform: 'translateY(20%) scale(2.3)',

        'z-index': '1'
      })),
      state('2big2', style({
        transform: 'translateY(20%) scale(2.3)',

        'z-index': '1'
      })),
      state('1big1', style({
        transform: 'translateX(50%) translateY(20%) scale(2.3) ',

        'z-index': '1'
      })),
      state('1big0', style({
        transform: 'translateX(20%) scale(0.8)',

      })),
      state('1big2', style({
        transform: 'translateX(80%) scale(0.8)',

      })),
      state('1big3', style({
        transform: 'translateX(50%) scale(0.6)',

      })),
      state('1big4', style({
        transform: 'scale(0.4)'

      })),

      state('3big3', style({
        transform: 'translateX(-50%) translateY(20%) scale(2.3)',

        'z-index': '1'
      })),

      state('3big4', style({
        transform: 'translateX(-20%) scale(0.8)',

      })),
      state('3big2', style({
        transform: 'translateX(-80%) scale(0.8)',

      })),

      state('3big1', style({
        transform: 'translateX(-50%) scale(0.6)',

      })),
      state('3big0', style({
        transform: 'scale(0.4)'

      })),


      state('0big0', style({
        transform: 'translateX(100%) translateY(20%) scale(2.3)',

        'z-index': '1'
      })),

      state('0big1', style({
        transform: 'translateX(130%) scale(0.8)',
      })),
      state('0big2', style({
        transform: 'translateX(100%) scale(0.6)',
      })),
      state('0big3', style({
        transform: 'translateX(50%) scale(0.4)',
      })),
      state('0big4', style({
        transform: 'translateX(-20%) scale(0.2)',
      })),


      state('4big4', style({
        transform: 'translateX(-100%) translateY(20%) scale(2.3)',

        'z-index': '1'
      })),
      state('4big3', style({
        transform: 'translateX(-130%) scale(0.8)',
      })),
      state('4big2', style({
        transform: 'translateX(-100%) scale(0.6)',
      })),
      state('4big1', style({
        transform: 'translateX(-50%) scale(0.4)',
      })),
      state('4big0', style({
        transform: 'translateX(20%) scale(0.2)',
      })),

      transition('normal2=>normal2-n', animate(300)),
      transition('normal2-n=>normal2', animate(0)),

      transition('normal1=>normal1-n', animate(300)),
      transition('normal1-n=>normal1', animate(0)),

      transition('normal3=>normal3-n', animate(300)),
      transition('normal3-n=>normal3', animate(0)),

      transition('normal4=>normal4-n', animate(300)),
      transition('normal4-n=>normal4', animate(0)),

      transition('normal0=>normal0-n', animate(300, keyframes([
        style({
          transform: 'translateX(-30%) translateY(-70%) scale(0.4)',
          opacity: 0,
          offset: 0.5
        }),
        style({
          transform: 'translateX(420%) translateY(-70%) scale(0.4)',
          opacity: 0,
          offset: 0.51
        }),
        style({
          transform: 'translateX(380%) translateY(-50%) scale(0.6)',
          opacity: 1,
          offset: 1
        })
      ]))),
      transition('normal0-n=>normal0', animate(0)),





      transition('*<=>*', animate(300)),
    ])
  ]
  const mobileAnimation = [
    trigger('templated', [])
  ]

  const isMobile = matchMedia("(max-width: 800px)").matches;
  return isMobile ? mobileAnimation : animation;
}