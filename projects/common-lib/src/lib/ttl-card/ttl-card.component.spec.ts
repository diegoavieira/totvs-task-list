import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtlCardComponent } from './ttl-card.component';

describe('TtlCardComponent', () => {
  let component: TtlCardComponent;
  let fixture: ComponentFixture<TtlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtlCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
