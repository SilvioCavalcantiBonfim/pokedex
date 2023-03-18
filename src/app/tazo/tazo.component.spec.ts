import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TazoComponent } from './tazo.component';

describe('TazoComponent', () => {
  let component: TazoComponent;
  let fixture: ComponentFixture<TazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TazoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
