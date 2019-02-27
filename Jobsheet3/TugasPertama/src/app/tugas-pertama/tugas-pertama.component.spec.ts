import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TugasPertamaComponent } from './tugas-pertama.component';

describe('TugasPertamaComponent', () => {
  let component: TugasPertamaComponent;
  let fixture: ComponentFixture<TugasPertamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TugasPertamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TugasPertamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
