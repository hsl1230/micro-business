import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActivityPage } from './post-activity.page';

describe('PostActivityPage', () => {
  let component: PostActivityPage;
  let fixture: ComponentFixture<PostActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostActivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
