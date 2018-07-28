import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarIndexComponent } from './search-bar-index.component';

describe('SearchBarIndexComponent', () => {
  let component: SearchBarIndexComponent;
  let fixture: ComponentFixture<SearchBarIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
