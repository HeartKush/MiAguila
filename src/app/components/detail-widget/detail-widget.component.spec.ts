import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWidgetComponent } from './detail-widget.component';

describe('DetailWidgetComponent', () => {
  let component: DetailWidgetComponent;
  let fixture: ComponentFixture<DetailWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
