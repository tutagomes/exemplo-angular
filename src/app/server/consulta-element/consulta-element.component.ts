import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Consulta } from '../consulta';
import { LoggingService } from 'src/app/logging.service';
@Component({
  selector: '[app-consulta-element]',
  templateUrl: './consulta-element.component.html',
  styleUrls: ['./consulta-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Native, None
})
export class ConsultaElementComponent implements OnInit {

  @Input () consulta: Consulta;
  @Input ('indice') index: number;
  @Output() deleteConsulta = new EventEmitter<{index: number}>();
  constructor(private logginService: LoggingService) { }

  ngOnInit() {
  }
  onDeleteConsulta (index) {
    this.logginService.addToLog('Chamando evento de exclusão de consulta')
    this.deleteConsulta.emit({index});
  }
 formataData (data) {
   let momento = new Date(data)
   return momento.getHours() + ':' + momento.getMinutes() + ':' + momento.getSeconds()
 }
}
