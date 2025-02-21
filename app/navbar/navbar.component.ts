import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user:String = 'jodey hany'
  userImage:string = '../../assets/images/profile.jpg'
  userwork:string='front end'
  workplace:string='company'

}
