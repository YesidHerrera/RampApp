import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    IonicModule
  ],
  exports: [
    IonicModule,
    MaterialModule
  ]
})
export class SharedModule { }
