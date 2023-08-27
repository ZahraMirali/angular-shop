import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateProductComponent } from "./product/create-product/create-product.component";
import { RoomsceneComponent } from "./roomscene/roomscene.component";
import { EditPsdComponent } from "./template/edit-psd/edit-psd.component";
import { MakeTemplateComponent } from "./template/make-template/make-template.component";
import { TemplateListComponent } from "./template/template-list/template-list.component";
import { TemplateComponent } from "./template/template.component";


const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    {
        path: 'template', component: TemplateComponent, children: [
            { path: 'template-list', component: TemplateListComponent },
            { path: 'make-template', component: MakeTemplateComponent },
            { path: 'edit-psd', component: EditPsdComponent },
        ]
    },
    { path: 'roomscene', component: RoomsceneComponent },
    {
        path: 'product', component: CreateProductComponent, children: [
            { path: 'create-product', component: CreateProductComponent }
        ]
    },
    
    { path: "**", redirectTo: '/home' }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}