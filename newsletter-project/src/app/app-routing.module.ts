import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {
    path: 'homepage',
    loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'current-number',
    loadChildren: () => import('./features/current-number/current-number.module').then(m => m.CurrentNumberModule)
  },
  {
    path: 'archive',
    loadChildren: () => import('./features/archive/archive.module').then(m => m.ArchiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
