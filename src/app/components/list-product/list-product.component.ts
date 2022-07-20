import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product [] | any;
  id: any;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(result => {
      this.products = result;
    }, error => {
      console.log(error)
    })
  }

  deleteProduct(id:any) {
        this.productService.delete(id).subscribe(() => {
          alert(" are you sure ?")
          this.productService.getAll().subscribe(result => {
            this.products = result;
          }, error => {
            console.log(error)
          })
    })
  }
}
