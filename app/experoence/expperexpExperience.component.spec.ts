import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpperoenceComponent } from './expperoence.component';

describe('ExpperoenceComponent', () => {
  let component: ExpperoenceComponent;
  let fixture: ComponentFixture<ExpperoenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpperoenceComponent]
    });
    fixture = TestBed.createComponent(ExpperoenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
