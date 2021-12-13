import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePipeComponent } from './case-pipe.component';

describe('CasePipeComponent', () => {
  let component: CasePipeComponent;
  let fixture: ComponentFixture<CasePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
