import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZackComponentComponent } from './zack-component.component';

describe('ZackComponentComponent', () => {
  let component: ZackComponentComponent;
  let fixture: ComponentFixture<ZackComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZackComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
