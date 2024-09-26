import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarModelComponent } from './sidebar-model.component';

describe('SidebarModelComponent', () => {
  let component: SidebarModelComponent;
  let fixture: ComponentFixture<SidebarModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
