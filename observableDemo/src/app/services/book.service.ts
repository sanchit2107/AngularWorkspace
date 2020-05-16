import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/book';

export class BookService {

  constructor(private http:HttpClient) {
  }
  public getBooks(): Observable<Book[]> {
      const url = "assets/booklist.json";
      return this.http.get<Book[]>(url);
  }
}
