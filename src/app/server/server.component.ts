import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Consulta } from './consulta'
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers: [LoggingService]
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
  constructor(private logginService: LoggingService) { }
  onDeleteConsulta (event) {
    this.logginService.addToLog('Deletado historico de consulta!', false);
    this.historico.splice(event.index, 1)
  }
  verificaServidor () {
    this.consultaServer.recolhendo = true
    axios.get(this.server_url).then((response) => {
      this.consultaServer.serverStatus = true
      this.consultaServer.resposta = JSON.stringify(response.data)
      this.historico.push(new Consulta(true, JSON.stringify(response.data)))
    }).catch((error) => {
      this.consultaServer.serverStatus = false
      this.consultaServer.error = JSON.stringify(error)
      this.historico.push(new Consulta(false, JSON.stringify(error.message)))
    }).finally( () => {
      this.consultaServer.recolhendo = false
      this.consultaServer.recolhido = true
    })
  }
  ngOnInit() {
  }

}
