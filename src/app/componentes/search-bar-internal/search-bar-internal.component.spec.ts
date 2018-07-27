import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarInternalComponent } from './search-bar-internal.component';

describe('SearchBarInternalComponent', () => {
  let component: SearchBarInternalComponent;
  let fixture: ComponentFixture<SearchBarInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
