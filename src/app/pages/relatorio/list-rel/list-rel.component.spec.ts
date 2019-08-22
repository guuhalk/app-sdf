import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRelComponent } from './list-rel.component';

describe('ListRelComponent', () => {
  let component: ListRelComponent;
  let fixture: ComponentFixture<ListRelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
