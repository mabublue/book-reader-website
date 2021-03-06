import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BookReaderAppComponent } from './book-reader-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthorListComponent } from './authors/author-list.component';
import { AuthorListItemComponent } from './authors/author-list-item.component';
import { AuthorDetailsComponent } from './authors/author-details.component';
import { BookListComponent } from './books/book-list.component';
import { GenreListComponent } from './genres/genre-list.component';

import { LibraryService } from './services/library.service'

@NgModule({
  declarations: [
    BookReaderAppComponent,
    NavBarComponent,
    HomeComponent,
    AuthorListComponent,
    AuthorListItemComponent,
    AuthorDetailsComponent,
    BookListComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LibraryService],
  bootstrap: [BookReaderAppComponent]
})
export class AppModule { }
