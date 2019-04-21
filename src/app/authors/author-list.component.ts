import { Component } from '@angular/core'

@Component({
  template: `
  <div class="container  bg-light-grey">
    <h1>Authors</h1>
    <hr/>
    <author-list-item [authorlistitem]="authorlistitem"></author-list-item>
  </div>
  `
})
export class AuthorListComponent {
  authorlistitem = {
    id: 1,
    name: 'David Gemmel',
    imageUrl: '/assets/images/angularconnect-shield.png',
  }
}
