import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IEatModulesComponent } from './i-eat-modules.component';

describe('IEatModulesComponent', () => {
  let component: IEatModulesComponent;
  let fixture: ComponentFixture<IEatModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IEatModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IEatModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
