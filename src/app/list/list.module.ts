import { NgModule } from '@angular/core';

import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    ListRoutingModule,
    SharedModule
  ]
})
export class ListModule { }
