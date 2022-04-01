import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MerchantBlockComponent} from './merchant-block.component';

describe('MerchantBlockComponent', () => {
  let component: MerchantBlockComponent;
  let fixture: ComponentFixture<MerchantBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchantBlockComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
