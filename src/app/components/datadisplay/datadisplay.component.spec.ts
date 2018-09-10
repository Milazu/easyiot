import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadisplayComponent } from './datadisplay.component';

describe('DatadisplayComponent', () => {
  let component: DatadisplayComponent;
  let fixture: ComponentFixture<DatadisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
