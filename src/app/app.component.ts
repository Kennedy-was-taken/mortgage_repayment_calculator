import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileComponent } from "./mobile/mobile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MobileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styles/media.css']
})
export class AppComponent {
  title = 'Mortgage Repayment Calculator';
}
