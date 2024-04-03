import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FestivaisPageRoutingModule } from './festivais-routing.module';

import { FestivaisPage } from './festivais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FestivaisPageRoutingModule
  ],
  declarations: [FestivaisPage]
})
export class FestivaisPageModule {}
