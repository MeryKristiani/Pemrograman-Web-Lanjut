import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TugasKeduaComponent } from './tugas-kedua.component';

describe('TugasKeduaComponent', () => {
  let component: TugasKeduaComponent;
  let fixture: ComponentFixture<TugasKeduaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TugasKeduaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TugasKeduaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
