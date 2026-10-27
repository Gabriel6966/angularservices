import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantillafuncionsimpleComponent } from './plantillafuncionsimple-component';

describe('PlantillafuncionsimpleComponent', () => {
  let component: PlantillafuncionsimpleComponent;
  let fixture: ComponentFixture<PlantillafuncionsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillafuncionsimpleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillafuncionsimpleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
