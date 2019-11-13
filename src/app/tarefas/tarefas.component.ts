import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit, OnDestroy {
  tarefaId: number;
  paramsSubscription: Subscription;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tarefaId = this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.tarefaId = params['id']
    })
  }
  irParaServidores() {
    this.router.navigate(['/'])
  }
  ngOnDestroy () {
    this.paramsSubscription.unsubscribe()
  }

}
