import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsceneColorpickerComponent } from './roomscene-colorpicker.component';

describe('RoomsceneColorpickerComponent', () => {
  let component: RoomsceneColorpickerComponent;
  let fixture: ComponentFixture<RoomsceneColorpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsceneColorpickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsceneColorpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
