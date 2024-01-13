import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): should have poupanca = 10', ()=>{
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCorrent(): should have corrente = 50', () => {
    expect(component.getCorrente).toEqual(50);
  })

  it('(U) setSacar(): should transfer poupanca to corrent', ()=>{
    component.setSacar('10');
    // fixture.detectChanges();
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCorrente).toEqual(60);
  });

  it('(U) setDepositar(): should transfer corrent to poupanca', ()=>{
    component.setDepositar('50');
    // fixture.detectChanges();
    expect(component.getCorrente).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  it('(U) setSacar(): should transfer poupanca to corrent more than have', () => {
    component.setSacar('30');

    expect(component.getPoupanca).toEqual(10);
  })
});
