import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolListPageRoutingModule } from './rol-list-routing.module';

import { RolListPage } from './rol-list.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolListPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [RolListPage]
})
export class RolListPageModule {}
