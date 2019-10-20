import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFavouriteComponent } from './movie-favourite.component';

describe('MovieFavouriteComponent', () => {
  let component: MovieFavouriteComponent;
  let fixture: ComponentFixture<MovieFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
