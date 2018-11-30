import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostServicePage } from './post-service.page';

describe('PostServicePage', () => {
  let component: PostServicePage;
  let fixture: ComponentFixture<PostServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
