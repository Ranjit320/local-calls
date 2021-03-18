import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDoneComponent } from './by-done.component';

describe('ByDoneComponent', () => {
  let component: ByDoneComponent;
  let fixture: ComponentFixture<ByDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
