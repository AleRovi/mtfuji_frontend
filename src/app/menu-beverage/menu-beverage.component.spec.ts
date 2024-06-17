import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBeverageComponent } from './menu-beverage.component';

describe('MenuBeverageComponent', () => {
  let component: MenuBeverageComponent;
  let fixture: ComponentFixture<MenuBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBeverageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
