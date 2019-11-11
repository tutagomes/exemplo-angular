import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Consulta } from './consulta'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})


export class ServerComponent implements OnInit {

  historico = []
  server_url = 'http://localhost:8080/status';
  mostrar_resposta = false
  consultaServer = {
    serverStatus: false,
    recolhido: false,
    recolhendo: false,
    error: '',
    resposta: ''
  }
  constructor() { }

  verificaServidor () {
    this.consultaServer.recolhendo = true
    axios.get(this.server_url).then((response) => {
      this.consultaServer.serverStatus = true
      this.consultaServer.resposta = response.data
      this.historico.push(new Consulta(true, response.data))
    }).catch((error) => {
      this.consultaServer.serverStatus = false
      this.consultaServer.error = error
      this.historico.push(new Consulta(false, error))
    }).finally( () => {
      this.consultaServer.recolhendo = false
      this.consultaServer.recolhido = true
    })
  }
  ngOnInit() {
  }

}
