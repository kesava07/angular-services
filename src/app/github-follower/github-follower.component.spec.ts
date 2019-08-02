import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowerComponent } from './github-follower.component';

describe('GithubFollowerComponent', () => {
  let component: GithubFollowerComponent;
  let fixture: ComponentFixture<GithubFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
