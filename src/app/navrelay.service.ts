import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavrelayService {
  // 1
  id: number;

  receivedFilter: EventEmitter<number>;
  constructor() {
    this.receivedFilter = new EventEmitter<number>();
  }
  // 2
  raiseEvent(id: number): void {
    console.log('starting NavrelayService::raiseEvent(id:number)');
    console.log('event id: ' + id);
    this.id = id;
    this.receivedFilter.emit(id);
  }
}
