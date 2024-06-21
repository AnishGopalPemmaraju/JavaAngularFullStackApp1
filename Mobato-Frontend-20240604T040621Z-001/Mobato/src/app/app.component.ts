import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ViewMobileComponentComponent } from './view-mobile-component/view-mobile-component.component';
import { AddMobileComponentComponent } from './add-mobile-component/add-mobile-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HomeComponentComponent,ViewMobileComponentComponent,AddMobileComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mobato';
}
