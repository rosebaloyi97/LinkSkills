import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureTechComponent } from './future-tech.component';

describe('FutureTechComponent', () => {
  let component: FutureTechComponent;
  let fixture: ComponentFixture<FutureTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
