import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleredialogComponentComponent } from './deleredialog-component.component';

describe('DeleredialogComponentComponent', () => {
  let component: DeleredialogComponentComponent;
  let fixture: ComponentFixture<DeleredialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleredialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleredialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
