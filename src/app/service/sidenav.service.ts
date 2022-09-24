import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  // private sidenavStatus = new BehaviorSubject(false);
  // currentSidenavStatus= this.sidenavStatus.asObservable();
  private sidenavStatus: boolean = false;
  emit_data = new EventEmitter();
  constructor() { }

  getStatus(): boolean {
    return this.sidenavStatus;
  }
  changeStatus(status: boolean) {
    //this.sidenavStatus.next(status);
    this.sidenavStatus = status;
    this.emit_data.emit(this.sidenavStatus);
  }
}
