import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordNewComponent } from './forgot-password-new.component';

describe('ForgotPasswordNewComponent', () => {
  let component: ForgotPasswordNewComponent;
  let fixture: ComponentFixture<ForgotPasswordNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
