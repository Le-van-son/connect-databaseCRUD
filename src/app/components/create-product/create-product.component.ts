import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Category} from "../../model/category";
import {CategoryService} from "../../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  categories: Category [] | any;
  products: Product [] | any
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
  })

  constructor(private productService: ProductService,private categoryService: CategoryService
  ,private router: Router) {

  }

  ngOnInit() {
    this.categoryService.getAll().subscribe((categories) => {this.categories = categories})

  }

  createProduct() {
    const product : Product = {
      name: this.productForm.value.name,
      price:this.productForm.value.price,
      category: {
        id: this.productForm.value.category
      }
    };
    this.productService.save(product).subscribe(() => {alert("Thành công")
    this.router.navigate(['/'])})
  }

}
