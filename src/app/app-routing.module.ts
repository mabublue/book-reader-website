import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { AuthorListComponent } from './authors/author-list.component'
import { AuthorDetailsComponent } from './authors/author-details.component'
import { BookListComponent } from './books/book-list.component';
import { GenreListComponent } from './genres/genre-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/:id', component: AuthorDetailsComponent },
  { path: 'books', component: BookListComponent },
  { path: 'genres', component: GenreListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
