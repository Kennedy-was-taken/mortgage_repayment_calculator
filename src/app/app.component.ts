import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightsideComponent } from "./rightside/rightside.component";
import { LeftsideComponent } from "./leftside/leftside.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RightsideComponent, LeftsideComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styles/landscape/mobileMedia.css', './styles/landscape/tabletMedia.css']
})
export class AppComponent {
  title = 'Mortgage Repayment Calculator';
}
