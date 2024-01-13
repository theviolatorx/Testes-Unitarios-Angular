import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingComponent, ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should create', () => {
    expect(component).toBeTruthy();
  });

  // Testes Unitários
  
  it('(U) getPoupanca(): should have poupanca = 10', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCorrent(): should have corrente = 50', () => {
    expect(component.getCorrente).toEqual(50);
  });

  it('(U) setSacar(): should transfer poupanca to corrente', () => {
    component.setSacar('10');
    // fixture.detectChanges();
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCorrente).toEqual(60);
  });

  it('(U) setDepositar(): should transfer corrente to poupanca', () => {
    component.setDepositar('50');
    // fixture.detectChanges();
    expect(component.getCorrente).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  it('(U) setSacar(): should transfer poupanca to corrente more than have', () => {
    component.setSacar('30');

    expect(component.getPoupanca).toEqual(10);
  });

  // Testes de Interface
  // Não entram no coverange

  it('(I) setDepositar(): should transfer $10 from corrente to poupanca in click action', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = 10;
    el.querySelector('#depositar').click();
    fixture.detectChanges();  

    expect(el.querySelector('#value-poupanca').textContent).toEqual('20');
    expect(component.getCorrente).toEqual(40);
    expect(component.getPoupanca).toEqual(20);
  });

  it('(I) setSacar(): should transfer $10 from poupanca to corrente in click action', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-sacar').value = 10;
    el.querySelector('#sacar').click();
    fixture.detectChanges();  

    expect(el.querySelector('#value-corrente').textContent).toEqual('60');
    expect(component.getCorrente).toEqual(60);
    expect(component.getPoupanca).toEqual(0);
  });
});
