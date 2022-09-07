import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaculPage } from './macul.page';

const routes: Routes = [
  {
    path: '',
    component: MaculPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaculPageRoutingModule {}
