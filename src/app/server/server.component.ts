import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {

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
      console.log(response)
      this.consultaServer.serverStatus = true
      this.consultaServer.resposta = response.data
    }).catch((error) => {
      this.consultaServer.serverStatus = false
      this.consultaServer.error = error
      console.log(error)
    }).finally( () => {
      this.consultaServer.recolhendo = false
      this.consultaServer.recolhido = true
    })
  }
  ngOnInit() {
  }

}
