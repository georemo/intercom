import { Component, OnInit } from '@angular/core';
import { NavrelayService } from '../navrelay.service';
import { Desktop } from '../desktop/desktop.model';


@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  menuGuid: number;
  smenuItem;
  ds: Desktop;
  dsCollection;
  htmlStr = '<strong>The Tortoise</strong> &amp; the Hare';

  constructor(private navrelay: NavrelayService) {
    this.ds = new Desktop();
    this.dsCollection = this.ds.dsCollection;
    this.menuGuid = 101;
  }

  ngOnInit() {
    this.navrelay.receivedFilter.subscribe((param: number) => {
      this.menuGuid = param;
    });
  }

  reload() {
    this.setContentKey();
  }

  setContentKey() {
    console.log('starting DesktopComponent::setContentKey()')
    this.dsCollection = this.ds.filterContents(this.menuGuid);
    console.dir(this.dsCollection);
    this.htmlStr = `<strong>The Tortoise</strong> &amp; the Hare ${this.dsCollection.content}` ;
  }

  getDsCollection(){
    return this.dsCollection;
  }

}
