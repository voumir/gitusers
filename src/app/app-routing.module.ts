import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './pages/error404/error404.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [

  { path: 'userdetail/:login', component: UserdetailComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'erro404', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

