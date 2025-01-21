import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCollectionPage } from './list-collection.page';

describe('ListCollectionPage', () => {
  let component: ListCollectionPage;
  let fixture: ComponentFixture<ListCollectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
