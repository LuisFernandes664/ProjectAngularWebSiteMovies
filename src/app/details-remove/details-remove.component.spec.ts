import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRemoveComponent } from './details-remove.component';

describe('DetailsRemoveComponent', () => {
  let component: DetailsRemoveComponent;
  let fixture: ComponentFixture<DetailsRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
