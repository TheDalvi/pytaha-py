import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarListPage } from './publicar-list.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarListPageRoutingModule {}
