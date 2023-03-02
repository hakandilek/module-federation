import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from './state.service';


@NgModule({
  providers: [
    StateService,
  ],
  imports: [
    CommonModule
  ],
})
export class StateModule { }
