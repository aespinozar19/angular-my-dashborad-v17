import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {


  public menuItems = routes.map(
    route => route.children ?? []
  ).flat()
  .filter( route => route && route.path )
  .filter( route => !route.path?.includes(':'));

  // console.log( dashboardRoutes );

  constructor() {

    // const dashboardRoutes = routes.map(
    //   route => route.children ?? []
    // ).flat()
    // .filter( route => route && route.path )
    // .filter( route => !route.path?.includes(':'));

    // console.log( dashboardRoutes );

  }

}
