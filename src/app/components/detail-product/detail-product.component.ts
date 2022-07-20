import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";

const API_URL = 'http://localhost:8080/api/products';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  pro: any = {}

  constructor(private activatedRoute: ActivatedRoute, private httClient: HttpClient) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.httClient.get(API_URL + '/' + param.get('id')).subscribe((data) => {
        this.pro = data
      })
    })

  }
}
