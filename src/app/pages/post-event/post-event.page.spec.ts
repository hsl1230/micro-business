import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEventPage } from './post-event.page';

describe('PostEventPage', () => {
  let component: PostEventPage;
  let fixture: ComponentFixture<PostEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
