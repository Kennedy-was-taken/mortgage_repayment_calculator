import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RightsideComponent } from "./rightside/rightside.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RightsideComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styles/media.css']
})
export class AppComponent {
  title = 'Mortgage Repayment Calculator';
}
