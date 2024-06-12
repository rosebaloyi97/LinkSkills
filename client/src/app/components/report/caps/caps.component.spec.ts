import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsComponent } from './caps.component';

describe('CapsComponent', () => {
  let component: CapsComponent;
  let fixture: ComponentFixture<CapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
