import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsgConverterComponent } from './epsg-converter.component';

describe('EpsgConverterComponent', () => {
  let component: EpsgConverterComponent;
  let fixture: ComponentFixture<EpsgConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpsgConverterComponent]
    });
    fixture = TestBed.createComponent(EpsgConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
