import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtlListComponent } from './ttl-list.component';

describe('TtlListComponent', () => {
  let component: TtlListComponent;
  let fixture: ComponentFixture<TtlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
