import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product_data:string[];

  constructor(private service:HttpClient) {
   }

  ngOnInit(): void {
    this.service.get('http://localhost:8085/product/allProducts').subscribe(
      data=>{
        this.product_data=data as string[];
      },
      (err: HttpErrorResponse)=>{
        console.log(err);
      }
    );
  }

}
