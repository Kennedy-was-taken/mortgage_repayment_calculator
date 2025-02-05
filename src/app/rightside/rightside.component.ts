import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { SharedServiceService } from '../Services/shared-service.service';

@Component({
  selector: 'app-rightside',
  imports: [ NgIf],
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css', './styles/landscape/mobileMedia.css', './styles/portrait/tabletMedia.css', './styles/landscape/tabletMedia.css', './styles/landscape/desktopMedia.css']
})
export class RightsideComponent implements OnInit {
  currentTotalCost = 0;
  currentMonthlyPayment = 0;
  firstScreen = true;
  secondScreen = false;


  constructor(private service : SharedServiceService) {}

  ngOnInit(): void {
    this.service.currentShowElement1.subscribe(show => {
      this.firstScreen = show;
    });
    this.service.currentShowElement2.subscribe(show => {
      this.secondScreen = show;
    });
    this.service.currentTotalCost.subscribe(totalCost => {
      this.currentTotalCost = totalCost;
    });
    this.service.currentMonthlyPayment.subscribe(monthlyPayment => {
      this.currentMonthlyPayment = monthlyPayment;
    });
  }
}
