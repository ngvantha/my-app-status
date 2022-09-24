import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/service/sidenav.service';
import { MenuSidenavComponent } from '../menu-sidenav/menu-sidenav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  constructor(private sidenav: SidenavService) { }
  ngOnInit(): void {
  }

  toggleMenu() {
    this.showFiller = !this.sidenav.getStatus();
    this.sidenav.changeStatus(this.showFiller);
  }

}
