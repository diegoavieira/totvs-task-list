import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtlFooterComponent } from './ttl-footer.component';

describe('TtlFooterComponent', () => {
  let component: TtlFooterComponent;
  let fixture: ComponentFixture<TtlFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtlFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
