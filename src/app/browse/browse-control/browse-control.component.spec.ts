import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseControlComponent } from './browse-control.component';

describe('BrowseControlComponent', () => {
  let component: BrowseControlComponent;
  let fixture: ComponentFixture<BrowseControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
