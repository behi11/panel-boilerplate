import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppTitle } from '../../../database/app';
import { drawerItems, IDrawerItem } from '../../../database/drawer';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public path: string = this.router.url;
  public drawerItems: IDrawerItem[] = drawerItems;

  public AppTitle: string = AppTitle;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.path = this.router.url;
    });
  }

  logout(): void {
    // Your logout code comes here

    this.router.navigate(['/auth']);
  }
}
