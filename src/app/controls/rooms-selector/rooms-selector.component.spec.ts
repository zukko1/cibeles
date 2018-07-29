import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsSelectorComponent } from './rooms-selector.component';

describe('RoomsSelectorComponent', () => {
  let component: RoomsSelectorComponent;
  let fixture: ComponentFixture<RoomsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
