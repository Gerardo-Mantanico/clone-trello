import { Component } from '@angular/core';
import { faBell, faInfoCircle, faAngleDown}from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCicle = faInfoCircle;
  faAngleDown= faAngleDown;
  isOpen=false;
  isOpenTemplates=false;
}
