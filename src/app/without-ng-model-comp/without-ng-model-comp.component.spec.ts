import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutNgModelCompComponent } from './without-ng-model-comp.component';

describe('WithoutNgModelCompComponent', () => {
  let component: WithoutNgModelCompComponent;
  let fixture: ComponentFixture<WithoutNgModelCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutNgModelCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutNgModelCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
