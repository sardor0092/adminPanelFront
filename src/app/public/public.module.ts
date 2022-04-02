import { NgModule } from '@angular/core';
import { MaterilaModule } from 'src/app/shared/material/material.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing-module';


@NgModule({
    declarations: [
      HomeComponent,
      
    ],
    imports: [
      CommonModule,
      PublicRoutingModule,
      MaterilaModule,
      
  
    ],
    bootstrap: [HomeComponent]
  })
  export class PublicModule { }