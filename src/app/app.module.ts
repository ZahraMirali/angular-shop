import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MakeTemplateComponent } from './template/make-template/make-template.component';
import { TemplateComponent } from './template/template.component';
import { TemplateListComponent } from './template/template-list/template-list.component';
import { TemplateItemComponent } from './template/template-list/template-item/template-item.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPsdComponent } from './template/edit-psd/edit-psd.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewComponent } from './template/edit-psd/preview/preview.component';
import { RoomsceneComponent } from './roomscene/roomscene.component';
import { RoomsceneProductListComponent } from './roomscene/roomscene-product-list/roomscene-product-list.component';
import { RoomsceneTemplateComponent } from './roomscene/roomscene-template/roomscene-template.component';
import { RoomsceneProductItemComponent } from './roomscene/roomscene-product-list/roomscene-product-item/roomscene-product-item.component';
import { RoomsceneProductDetailComponent } from './roomscene/roomscene-product-detail/roomscene-product-detail.component';
import { ProductComponent } from './product/product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { CreateProductPreviewComponent } from './product/create-product/create-product-preview/create-product-preview.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { RoomsceneColorpickerComponent } from './roomscene/roomscene-product-list/roomscene-colorpicker/roomscene-colorpicker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MakeTemplateComponent,
    TemplateComponent,
    TemplateListComponent,
    TemplateItemComponent,
    EditPsdComponent,
    PreviewComponent,
    RoomsceneComponent,
    RoomsceneProductListComponent,
    RoomsceneProductDetailComponent,
    RoomsceneTemplateComponent,
    RoomsceneProductItemComponent,
    ProductComponent,
    CreateProductComponent,
    CreateProductPreviewComponent,
    RoomsceneColorpickerComponent,
    
  ],
  imports: [
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    NgxSliderModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
