import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterilaModule } from "../shared/material/material.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { EditProfilComponent } from './entity/edit-profil/edit-profil.component';
import { LayoutComponent } from "./layout.component";
import { DeleredialogComponentComponent } from '../deleredialog-component/deleredialog-component.component';
import { TableComponent } from "../entity/table/table.component";

@NgModule({ 

     declarations:[
        SidenavComponent,
        LayoutComponent,
        HeaderComponent,
        TableComponent,
        EditProfilComponent,
        DeleredialogComponentComponent,
        
         

     ],



imports:[
    CommonModule,
    AdminRoutingModule,
    MaterilaModule,
    FormsModule,
    ReactiveFormsModule
],
})




export class AdminModule {}