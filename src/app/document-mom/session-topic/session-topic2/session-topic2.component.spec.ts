import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTopic2Component } from './session-topic2.component';

describe('SessionTopic2Component', () => {
  let component: SessionTopic2Component;
  let fixture: ComponentFixture<SessionTopic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionTopic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTopic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
