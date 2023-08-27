import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTemplateComponent } from './make-template.component';

describe('MakeTemplateComponent', () => {
  let component: MakeTemplateComponent;
  let fixture: ComponentFixture<MakeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
