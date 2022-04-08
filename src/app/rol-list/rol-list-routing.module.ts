import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolListPage } from './rol-list.page';

const routes: Routes = [
  {
    path: '',
    component: RolListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolListPageRoutingModule {}
