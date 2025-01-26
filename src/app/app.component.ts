import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styles/media.css']
})
export class AppComponent {
  title = 'mortgage_repayment_calculator';
}
