import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-tarefa-card',
  templateUrl: './tarefa-card.component.html',
  styleUrls: ['./tarefa-card.component.css']
})
export class TarefaCardComponent implements OnInit {
  @Input() tarefa: Tarefa;
  @Input() indice: number;
  @Output() editTarefa = new EventEmitter<Tarefa>();
  @Output() deleteTarefa = new EventEmitter<number>();
  @Output() toggleTarefa = new EventEmitter<{id: number, done: boolean}>();

  constructor() { }

  ngOnInit() {
  }
  
  onEditTarefa () {
    this.editTarefa.emit(this.tarefa)
  }
  onDeleteTarefa () {
    this.deleteTarefa.emit(this.tarefa.id)
  }
  marcarFeita () {
    this.toggleTarefa.emit({id: this.tarefa.id, done: !this.tarefa.done})
  }

}
