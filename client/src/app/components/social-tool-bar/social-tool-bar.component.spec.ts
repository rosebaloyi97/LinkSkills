import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialToolBarComponent } from './social-tool-bar.component';

describe('SocialToolBarComponent', () => {
  let component: SocialToolBarComponent;
  let fixture: ComponentFixture<SocialToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
