import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../services/library.service'

@Component({
  templateUrl: `./author-details.component.html`

})
export class AuthorDetailsComponent {
  author: any;

  constructor(private libraryService:LibraryService,
              private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.author = this.libraryService.getAuthor(+this.route.snapshot.params['id']);
  }
}
