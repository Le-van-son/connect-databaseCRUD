import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {ListProductComponent} from "./components/list-product/list-product.component";
import {CreateProductComponent} from "./components/create-product/create-product.component";
import {DetailProductComponent} from "./components/detail-product/detail-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'detail-product/:id',
    component: DetailProductComponent
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
