import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppManagerSideNavComponent } from './app-manager-side-nav.component';

describe('AppManagerSideNavComponent', () => {
  let component: AppManagerSideNavComponent;
  let fixture: ComponentFixture<AppManagerSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppManagerSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppManagerSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
