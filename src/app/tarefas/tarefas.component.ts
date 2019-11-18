import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, retry, retryWhen, take, delay } from 'rxjs/operators';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit, OnDestroy {
  tarefaId: number;
  paramsSubscription: Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  tarefas: any = [];
  ngOnInit() {
    this.tarefaId = this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.tarefaId = params['id']
    })
  }
  carregaTarefas () {
    this.http.get('http://localhost:8080/api/tarefas').pipe(retryWhen(errors => errors.pipe(delay(1000), take(10))), map( responseData => {
      return responseData;
    })).subscribe(tarefas => {
      this.tarefas = tarefas;
    }, error => {
      console.log(error)
    },
    () => {
      console.log('Carregado com sucesso!')
    })
  }
  irParaServidores() {
    this.router.navigate(['/'])
  }
  ngOnDestroy () {
    this.paramsSubscription.unsubscribe()
  }

}
