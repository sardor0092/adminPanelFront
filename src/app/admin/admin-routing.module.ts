import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserRouteAccessGuard } from "../core/user-route-access.guard";
import { TableComponent } from "../entity/table/table.component";
import { Lavozim } from "../shared/model/lavozim";
import { EditProfilComponent } from "./entity/edit-profil/edit-profil.component";
import { UserComponent } from "./entity/user/user.component";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: "table"
      },
      {
        path: 'user',
        component: UserComponent,
        canActivate: [UserRouteAccessGuard],
        data: {
          authorities: [Lavozim.ADMIN, Lavozim.DIREKTOR]
        }
      },
      { path: 'table', component: TableComponent },


      { path: "edit", component: EditProfilComponent },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdminRoutingModule { }