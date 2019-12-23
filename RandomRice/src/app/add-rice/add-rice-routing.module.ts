import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRicePage } from './add-rice.page';

const routes: Routes = [
  {
    path: '',
    component: AddRicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRicePageRoutingModule {}
