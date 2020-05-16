import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any = [];
  constructor(private router: Router, private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get("assets/booklist.json").subscribe(data => {
      console.log(data);
      this.books = data; } )
  }
  clickMe() {
    this.router.navigate(['/registration']);
  }
}
