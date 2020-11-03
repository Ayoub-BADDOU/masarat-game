import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsayModeComponent } from './esay-mode.component';

describe('EsayModeComponent', () => {
  let component: EsayModeComponent;
  let fixture: ComponentFixture<EsayModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsayModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsayModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
