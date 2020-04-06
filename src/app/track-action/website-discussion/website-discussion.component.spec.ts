import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDiscussionComponent } from './website-discussion.component';

describe('WebsiteDiscussionComponent', () => {
  let component: WebsiteDiscussionComponent;
  let fixture: ComponentFixture<WebsiteDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
