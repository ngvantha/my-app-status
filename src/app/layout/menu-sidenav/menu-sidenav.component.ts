import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from 'src/app/service/sidenav.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-menu-sidenav',
  templateUrl: './menu-sidenav.component.html',
  styleUrls: ['./menu-sidenav.component.css']
})
export class MenuSidenavComponent implements OnInit {
  showFiller: boolean = false;
  constructor(private sidenav: SidenavService) {
    this.sidenav.emit_data.subscribe(val => {
      console.log(val);
      this.showFiller = val
    });
  }

  ngOnInit(): void {
    // this.showFiller = this.sidenav.currentSidenavStatus.subscribe(status => this.showFiller = status);
  }

}
