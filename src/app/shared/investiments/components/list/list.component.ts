import { Component, OnInit } from '@angular/core';
import { Investiment } from '../../model/investiment';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  public investiments:Array<Investiment> = [
    { name: 'Banco do Brasil', value: 120 },
    { name: 'Bradesco', value: 160 },
    { name: 'Caixa Econômica Federal', value: 110 },
    { name: 'Santander', value: 140 },
    { name: 'Itaú', value: 100 },
    { name: 'Banco do Nordeste', value: 180 },
    { name: 'Banrisul', value: 130 },
    { name: 'Banco Safra', value: 150 },
    { name: 'HSBC', value: 170 },
    { name: 'Banco Inter', value: 190 },
    { name: 'Citibank', value: 105 },
    { name: 'Banco Original', value: 125 }
]

  constructor(){}

  ngOnInit(): void{

  }
}
