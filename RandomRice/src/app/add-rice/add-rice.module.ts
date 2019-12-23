import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRicePageRoutingModule } from './add-rice-routing.module';

import { AddRicePage } from './add-rice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRicePageRoutingModule
  ],
  declarations: [AddRicePage]
})
export class AddRicePageModule {}
