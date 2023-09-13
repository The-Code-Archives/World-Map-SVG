import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldInfoComponent } from './world-info.component';

describe('WorldInfoComponent', () => {
  let component: WorldInfoComponent;
  let fixture: ComponentFixture<WorldInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldInfoComponent]
    });
    fixture = TestBed.createComponent(WorldInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
