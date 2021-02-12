import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtlToolbarComponent } from './ttl-toolbar.component';

describe('TtlToolbarComponent', () => {
  let component: TtlToolbarComponent;
  let fixture: ComponentFixture<TtlToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TtlToolbarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtlToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
