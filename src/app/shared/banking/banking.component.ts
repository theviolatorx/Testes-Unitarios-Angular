import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss'
})
export class BankingComponent implements OnInit {
  private poupanca:number = 10;
  private corrente:number = 50;

  constructor(){}

  ngOnInit(): void {
      
  }

  get getPoupanca():number{
    return this.poupanca;
  }

  get getCorrente():number {
    return this.corrente;
  }

  public setSacar(value: string):number {
    const sacar = Number(value);
    this.poupanca -= sacar;
    if (this.poupanca < 0) {
      this.poupanca += sacar;
    } else {
      this.corrente += sacar;
    }
    return sacar;
    
  }
  public setDepositar(value: string):number {
    const depositar = Number(value);
    this.corrente -= depositar;
    this.poupanca += depositar;
    return depositar;
    
  }

}
