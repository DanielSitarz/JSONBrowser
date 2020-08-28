import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseUrlInputComponent } from './browse-url-input.component';

describe('BrowseUrlInputComponent', () => {
  let component: BrowseUrlInputComponent;
  let fixture: ComponentFixture<BrowseUrlInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseUrlInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseUrlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
