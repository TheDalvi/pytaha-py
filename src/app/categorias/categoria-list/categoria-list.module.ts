import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaListPageRoutingModule } from './categoria-list-routing.module';

import { CategoriaListPage } from './categoria-list.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaListPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
 
  ],
  declarations: [CategoriaListPage]
})
export class CategoriaListPageModule {}
