import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'locales/:nombre',
    loadChildren: () => import('./locales/locales.module').then( m => m.LocalesPageModule)
  },
  {
    path: 'la-florida',
    loadChildren: () => import('./la-florida/la-florida.module').then( m => m.LaFloridaPageModule)
  },
  {
    path: 'puente-alto',
    loadChildren: () => import('./puente-alto/puente-alto.module').then( m => m.PuenteAltoPageModule)
  },
  {
    path: 'macul',
    loadChildren: () => import('./macul/macul.module').then( m => m.MaculPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
