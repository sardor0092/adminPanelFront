import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterilaModule } from "./material/material.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterTabs } from "./roter-tab/router-tabs.directive";
import { RouterTab } from "./roter-tab/router-tab.dirictive";
import { DeleredialogComponentComponent } from "../deleredialog-component/deleredialog-component.component";

@NgModule({
    imports: [ CommonModule, MaterilaModule, RouterModule],
    declarations: [PageNotFoundComponent, RouterTabs, RouterTab ],
  
    exports: [
    
        CommonModule,
        PageNotFoundComponent,
        RouterTabs,
        RouterTab,
        
        


    ]
})



export class SharedModule { }