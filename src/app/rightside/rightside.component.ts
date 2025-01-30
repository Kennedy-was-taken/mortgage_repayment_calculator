import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rightside',
  imports: [ NgIf],
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css', './styles/landscape/mobileMedia.css', './styles/portrait/tabletMedia.css', './styles/landscape/tabletMedia.css', './styles/landscape/desktopMedia.css']
})
export class RightsideComponent {

  firstScreen = false;
  secondScreen = true;
}
