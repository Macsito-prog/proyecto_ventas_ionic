import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaFloridaPage } from './la-florida.page';

const routes: Routes = [
  {
    path: '',
    component: LaFloridaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaFloridaPageRoutingModule {}
