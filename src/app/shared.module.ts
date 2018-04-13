import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { LoadingButtonComponent } from './shared/loading-button.component';

@NgModule({
  declarations: [
    LoadingButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    LoadingButtonComponent
  ]
})
export class SharedModule { }
