import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookReaderAppComponent } from './book-reader-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BookReaderAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BookReaderAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'book-reader-website'`, () => {
    const fixture = TestBed.createComponent(BookReaderAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('book-reader-website');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(BookReaderAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to book-reader-website!');
  });
});
