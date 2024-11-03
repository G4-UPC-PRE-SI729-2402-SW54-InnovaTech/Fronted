import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterfaceMainComponent } from './user-interface-main.component';

describe('UserInterfaceMainComponent', () => {
  let component: UserInterfaceMainComponent;
  let fixture: ComponentFixture<UserInterfaceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInterfaceMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInterfaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
