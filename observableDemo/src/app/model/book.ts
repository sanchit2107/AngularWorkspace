export class Book {
  id: number;
  title: string;
  year: number;
  author: string;

  constructor(id:number, title:string, year:number, author: string) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.author = author
    ;
  }

}
