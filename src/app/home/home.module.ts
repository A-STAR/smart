import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
