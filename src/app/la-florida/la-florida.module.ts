import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaFloridaPageRoutingModule } from './la-florida-routing.module';

import { LaFloridaPage } from './la-florida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaFloridaPageRoutingModule
  ],
  declarations: [LaFloridaPage]
})
export class LaFloridaPageModule {}
