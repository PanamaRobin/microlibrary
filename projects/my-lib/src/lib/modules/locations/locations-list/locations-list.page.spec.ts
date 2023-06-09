import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsListPage } from './locations-list.page';

describe('LocationsListPage', () => {
  let component: LocationsListPage;
  let fixture: ComponentFixture<LocationsListPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsListPage]
    });
    fixture = TestBed.createComponent(LocationsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
