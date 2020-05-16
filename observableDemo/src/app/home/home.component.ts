import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../services/book.service';
import {Book} from '../model/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books = new Array<Book>();
  constructor(private router: Router, private bService: BookService) {}
  ngOnInit(): void {
    this.bService.getBooks().subscribe(res => {
      this.books = res.map(
        b=> {
          return new Book(b.id, b.title, b.year, b.author)
        });
    });
  }
  clickMe() {
    this.router.navigate(['/registration']);
  }
}
