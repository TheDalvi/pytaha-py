import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarListPageRoutingModule } from './publicar-list-routing.module';

import { PublicarListPage } from './publicar-list.page';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarListPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [PublicarListPage]
})
export class PublicarListPageModule {}
