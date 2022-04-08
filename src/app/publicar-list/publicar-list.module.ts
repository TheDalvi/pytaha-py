import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarListPageRoutingModule } from './publicar-list-routing.module';

import { PublicarListPage } from './publicar-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarListPageRoutingModule
  ],
  declarations: [PublicarListPage]
})
export class PublicarListPageModule {}
