import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCollectionPage } from './create-collection.page';

describe('CreateCollectionPage', () => {
  let component: CreateCollectionPage;
  let fixture: ComponentFixture<CreateCollectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});