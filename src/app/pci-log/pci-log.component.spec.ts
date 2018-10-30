import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PciLogComponent } from './pci-log.component';

describe('PciLogComponent', () => {
  let component: PciLogComponent;
  let fixture: ComponentFixture<PciLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PciLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PciLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
