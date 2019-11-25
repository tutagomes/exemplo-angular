import { Injectable } from '@angular/core';
import axios from 'axios'
import { Consulta } from '../server/consulta'
import {LoggingService} from '../logging.service'
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private *getId() {
    let i = 0;
    while (true) {
      yield i++;
    }
  }
  constructor(private loggin: LoggingService, private http: HttpClient) { }

  carregaTarefas () {
    this.http.get('http://localhost:8080/api/tarefas')
    .pipe(retry(5), map( responseData => {
      return responseData;
    })).subscribe(resposta => {
      console.log(resposta)
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
	idGenerator = this.getId();
  public historico: Consulta[] = []
  public getHistorico () {
    this.loggin.addToLog('GET HISTORICO', true)
    return this.historico;
  }
  public removeById(id) {
    console.error('REMOVIDO DE ID:' + id)
    for (let i = 0; i < this.historico.length; i++) {
      if (this.historico[i].id === id) {
        this.historico.splice(i, 1)
        break;
      }
    }
  }
  public removeHistorico (index) {
    this.historico.splice(index, 1)
  }
  public async getConsulta(url) {
    this.http.get(url).subscribe(
      resposta => {
        console.log(resposta)
        this.historico.push(new Consulta(<number>this.idGenerator.next().value, true, JSON.stringify(resposta)))
      },
      erro => {
        this.historico.push(new Consulta(<number>this.idGenerator.next().value, false, JSON.stringify(erro.message)))
        console.error(erro)
      },
      () => {
        console.log('Completa')
      }
    )
    return
    try {
      let response = await axios.get(url);
      axios.get(url).then()
      console.log(response.data)
      this.loggin.addToLog('Consulta com sucesso', true)
      this.historico.push(new Consulta(<number>this.idGenerator.next().value, true, JSON.stringify(response.data)))
    } catch (error) {
      this.loggin.addToLog('Consulta com erro', false)
      this.historico.push(new Consulta(<number>this.idGenerator.next().value, false, error.message))
    }
  }
}
