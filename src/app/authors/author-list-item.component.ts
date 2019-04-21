import { Component, Input } from '@angular/core'

@Component({
  selector: 'author-list-item',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{authorlistitem.name}}</h2>
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
