import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerComponent } from './server/server.component'
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
    {
        path: '',
        component: ServerComponent
    },
    {
        path: 'tarefas',
        component: TarefasComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
