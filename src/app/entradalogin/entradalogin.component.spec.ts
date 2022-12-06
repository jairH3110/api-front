import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaloginComponent } from './entradalogin.component';

describe('EntradaloginComponent', () => {
  let component: EntradaloginComponent;
  let fixture: ComponentFixture<EntradaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
