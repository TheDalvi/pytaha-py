import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolPageRoutingModule } from './rol-routing.module';

import { RolPage } from './rol.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolPageRoutingModule, HttpClientModule,ReactiveFormsModule
  ],
  declarations: [RolPage]
})
export class RolPageModule {}
