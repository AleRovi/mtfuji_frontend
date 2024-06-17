import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBeverageCardComponent } from './menu-beverage-card.component';

describe('MenuBeverageCardComponent', () => {
  let component: MenuBeverageCardComponent;
  let fixture: ComponentFixture<MenuBeverageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBeverageCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBeverageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
