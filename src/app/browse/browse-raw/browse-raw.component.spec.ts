import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseRawComponent } from './browse-raw.component';

describe('BrowseRawComponent', () => {
  let component: BrowseRawComponent;
  let fixture: ComponentFixture<BrowseRawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseRawComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
