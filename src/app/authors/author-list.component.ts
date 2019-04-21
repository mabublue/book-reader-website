import { Component, OnInit } from '@angular/core'
import { LibraryService } from '../services/library.service';

@Component({
  template: `
  <div class="container bg-light-grey">
    <h1>Authors</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let author of authors" class="col-md-4">
        <author-list-item [authorlistitem]="author"></author-list-item>
      </div>
    </div>
  `
})
export class AuthorListComponent implements OnInit {
  authors:any[]
  constructor(private libraryService: LibraryService) {

  }
  ngOnInit() {
    this.authors = this.libraryService.getAuthors();
  }
}
