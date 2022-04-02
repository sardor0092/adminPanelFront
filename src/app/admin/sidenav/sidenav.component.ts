import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/accaunt.service';
import { Lavozim } from 'src/app/shared/model/lavozim';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit ,OnInit {

  avatar!:string;
  isAdmin = false;
  
  constructor(private accountService: AccountService) { }
  ngOnInit(): void {
   this.isAdmin = this.accountService.hasAnyAuthority([Lavozim.ADMIN, Lavozim.DIREKTOR]);
  }

  ngAfterViewInit(): void {

    

  }


}
