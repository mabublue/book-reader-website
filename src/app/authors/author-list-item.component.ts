import { Component, Input } from '@angular/core'

@Component({
  selector: 'author-list-item',
  template: `
    <div class="card border-secondary mb-3" [routerLink]="['/authors', authorlistitem.id]">
      <div class="card-body">
        <h3>{{authorlistitem.fullname}}</h3>
      </div>
    </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]

})
export class AuthorListItemComponent {
  @Input() authorlistitem:any
}
