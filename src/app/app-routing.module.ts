import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./module/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./module/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
