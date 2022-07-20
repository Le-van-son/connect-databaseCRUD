import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../model/category";
import {Product} from "../../model/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  categories: Category [] | any;
  id: any;
  editForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
  })
  constructor(private productService: ProductService,private router: Router,private categoryService: CategoryService, private activatedRoute: ActivatedRoute) {
    this.categoryService.getAll().subscribe((categories) => {this.categories = categories})

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.productService.findById(param.get('id')).subscribe(data =>{
         this.id = param.get('id')
        this.editForm.patchValue({
          name: data.name,
          price: data.price,
          category: data.category.id
        })
      })
    })
  }
  editProduct() {
    const product : Product = {
      name: this.editForm.value.name,
      price:this.editForm.value.price,
      category: {
        id: this.editForm.value.category
      }
    };
    this.productService.update(this.id,product).subscribe(() => {
      alert("Thành công")
      this.router.navigate(['/'])
    })
  }

}
