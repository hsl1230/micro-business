import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBusinessPage } from './post-business.page';

describe('PostBusinessPage', () => {
  let component: PostBusinessPage;
  let fixture: ComponentFixture<PostBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBusinessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
