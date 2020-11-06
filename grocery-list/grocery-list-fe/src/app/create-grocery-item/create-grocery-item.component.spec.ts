import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroceryItemComponent } from './create-grocery-item.component';

describe('CreateGroceryItemComponent', () => {
  let component: CreateGroceryItemComponent;
  let fixture: ComponentFixture<CreateGroceryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroceryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroceryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
