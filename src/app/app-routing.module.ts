import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

import { ServerComponent } from './server/server.component'
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
    {
      path: '',
      component: ServerComponent,
      canActivate: [AuthGuard]
    },
    {
    	path: 'tarefas',
        component: TarefasComponent,
        canActivate: [AuthGuard]
    },
    {
    	path: 'tarefas/:id',
        component: TarefasComponent,
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



