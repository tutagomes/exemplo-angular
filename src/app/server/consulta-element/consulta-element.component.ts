import { Component, OnInit, Input } from '@angular/core';
import { Consulta } from '../consulta';
@Component({
  selector: '[app-consulta-element]',
  templateUrl: './consulta-element.component.html',
  styleUrls: ['./consulta-element.component.css']
})
export class ConsultaElementComponent implements OnInit {

  @Input () consulta: Consulta;
  @Input () index: number;
  constructor() { }

  ngOnInit() {
  }
 formataData (data) {
   let momento = new Date(data)
   return momento.getHours() + ':' + momento.getMinutes() + ':' + momento.getSeconds()
 }
}
