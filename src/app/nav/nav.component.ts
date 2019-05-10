import { Component, OnInit } from '@angular/core';
import { SideMenu, MenuItem } from './nav.model';
import { NavrelayService } from '../navrelay.service';

@Component({
  selector: 'app-nav',
  template: `<div class="container">
              <h2><strong>Menu List</strong> </h2>
                <table class="table table-bordered table-striped">
                  <thead>
                      <tr>
                        <td>GUID</td>
                        <td>Title</td>
                      </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let smi of sMenu" (click)="getSelectedMenu(smi)">
                        <td>{{smi.guid}}</td>
                        <td>{{smi.title}}</td>
                    </tr>
                  </tbody>
                </table>
            </div>`,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // 3.
  smenuItem: MenuItem;
  sMenu = SideMenu;
  // 4.
  constructor(private navrelay: NavrelayService) {
    this.smenuItem = new MenuItem(0, '');
  }


  ngOnInit(): void { }

  // 5.
  getSelectedMenu(smi: MenuItem): void {
    console.log('starting CategorySenderComponent::getSelectedCategory(c:Category)');
    console.log('selected category>>');
    console.dir(smi);

    this.smenuItem = smi;
    this.navrelay.raiseEvent(this.smenuItem.guid);
  }

}
