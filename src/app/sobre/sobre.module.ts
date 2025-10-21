import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrePageRoutingModule } from './sobre-routing.module';

import { SobrePage } from './sobre.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrePageRoutingModule,
    IonicModule.forRoot(),
    SharedModule
  ],
  declarations: [SobrePage]
})
export class SobrePageModule {}
