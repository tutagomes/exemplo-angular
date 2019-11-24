import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retry, retryWhen, take, delay } from 'rxjs/operators';
import { TarefasService } from '../services/tarefas.service'
import { Tarefa } from './tarefa';
@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit, OnDestroy {

  tarefaId: number;
  editingTarefa: boolean = false;
  paramsSubscription: Subscription;
  tarefa: Tarefa = new Tarefa(null, '');

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private tarefasService: TarefasService) { }
  
  ngOnInit() {
    this.tarefaId = this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.tarefaId = params['id']
    })
    this.tarefasService.carregaTudo()
  }
  carregaTarefas () {
    this.tarefasService.carregaTarefas()
    return
    this.http.get('http://localhost:8080/api/tarefas?_sort=id&_order=desc').pipe(retryWhen(errors => errors.pipe(delay(1000), take(10))), map( responseData => {
      return responseData;
    })).subscribe(tarefas => {
      // this.tarefasArray = tarefas;
    }, error => {
      console.log(error)
    },
    () => {
      console.log('Carregado com sucesso!')
    })
  }
  ngOnDestroy () {
    this.paramsSubscription.unsubscribe()
  }
  addTarefa () {
    console.log(this.tarefa)
    this.tarefasService.createTarefa(this.tarefa);
    this.tarefa = new Tarefa();
  }
  deleteTarefa(id: number) {
    this.tarefasService.deleteTarefa(id);
  }
  editTarefa (tarefa: Tarefa) {
    this.tarefa = {...tarefa}
    this.editingTarefa = true;
  }
  salvaEdicao () {
    this.tarefasService.editTarefa(this.tarefa)
    this.cancelaEdicao()
  }
  cancelaEdicao () {
    this.editingTarefa = false
    this.tarefa = new Tarefa();
  }
  toggleTarefa(ojb: {id: number, done: boolean}) {
    this.tarefasService.editTarefa(ojb);
  }

}
