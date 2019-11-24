import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs/operators';
import { LoggingService } from '../logging.service';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from '../tarefas/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private loggin: LoggingService, private http: HttpClient) { }
  tarefas:[] = [];
  usuarios:[] = [];

  carregaTudo () {
    this.carregaTarefas();
    this.carregaUsuarios();
  }
  carregaUsuarios () {
    this.http.get('http://localhost:8080/api/users')
    .pipe(retry(5), map( responseData => {
      return responseData;
    })).subscribe(resposta => {
      this.usuarios = <[]>resposta
    },
    error => {
      console.log(error)
    },
    () => {
    })  
  }
  carregaTarefas () {
    this.http.get('http://localhost:8080/api/tarefas?_expand=user&_sort=id&_order=desc')
    .pipe(retry(5), map( responseData => {
      return responseData;
    })).subscribe(resposta => {
      this.tarefas = <[]>resposta
    },
    error => {
      console.log(error)
    },
    () => {
      console.log('Completa')
    })  
    /*subscribe(tarefas => {
      this.tarefas = tarefas;
    }, error => {
      console.log(error)
    },
                  () => {
      console.log('Carregado com sucesso!')
    }) */
  }
  createTarefa (tarefa: Tarefa) {
    this.http.post('http://localhost:8080/api/tarefas', tarefa).subscribe((response) => {
      console.log(response)
      this.carregaTarefas();
    },
    (error) => {
      console.log(error)
    })
  }
  deleteTarefa (id: number) {
    this.http.delete('http://localhost:8080/api/tarefas/' + id).subscribe((response) => {
      this.carregaTarefas();
    }, 
    (error)=> {
      console.log(error)
    })
  }
  editTarefa (tarefa: Tarefa | any) {
    this.http.patch('http://localhost:8080/api/tarefas/' + tarefa.id, tarefa).subscribe((response)=>{
      this.carregaTarefas();
    },
    (error)=> {
      console.log(error)
    })
  }
}
