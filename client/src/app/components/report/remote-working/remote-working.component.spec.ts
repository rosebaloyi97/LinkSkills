import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteWorkingComponent } from './remote-working.component';

describe('RemoteWorkingComponent', () => {
  let component: RemoteWorkingComponent;
  let fixture: ComponentFixture<RemoteWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
