import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGamesPage } from './list-games.page';

describe('ListGamesPage', () => {
  let component: ListGamesPage;
  let fixture: ComponentFixture<ListGamesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
