import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NoteListLoadComponent } from './components/note-list-load/note-list-load.component';
import { StartLoginComponent } from './components/start-login/start-login.component';

const routes: Routes = [
  {
    path: '',
    component: StartLoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'list/note',
    component: NoteListLoadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
