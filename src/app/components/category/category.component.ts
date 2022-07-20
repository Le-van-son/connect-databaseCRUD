import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   categories: Category [] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

  }
getAllCategory(){
  this.categoryService.getAll().subscribe(result =>{
    this.categories = result;
    console.log('result',result)
  }, error => {
    console.log(error)
  })
}
}
