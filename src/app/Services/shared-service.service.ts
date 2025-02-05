import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  totalCost : number = 0;
  monthCost : number = 0;

  private showElement1Source = new BehaviorSubject<boolean>(true);
  currentShowElement1 = this.showElement1Source.asObservable();

  private showElement2Source = new BehaviorSubject<boolean>(false);
  currentShowElement2 = this.showElement2Source.asObservable();

  private showTotalCost = new BehaviorSubject<number>(0);
  currentTotalCost = this.showTotalCost.asObservable();

  private showMonthlyPayment = new BehaviorSubject<number>(0);
  currentMonthlyPayment = this.showMonthlyPayment.asObservable();

  public updateRightSide1(show: boolean) {
    this.showElement1Source.next(show);
  }

  public updateRightSide2(show: boolean) {
    this.showElement2Source.next(show);
  }

  public updatevalues(){
    this.showTotalCost.next(this.totalCost);
    this.showMonthlyPayment.next(this.monthCost);
  }

  // Expose the BehaviorSubject (use with caution!)
  public getShowElement1Subject() {
    return this.showElement1Source;
  }

  public getShowElement2Subject() {
    return this.showElement2Source;
  }


  public setValues(totalCost : number, monthCost : number){
    this.totalCost = totalCost;
    this.monthCost = monthCost;
  }

  constructor() { }

  // updatePanel(test : boolean){

  //   this.testSubject.subscribe(value => {
  //     console.log("The value is:", value); // Directly use the boolean value
    
  //     // Use it in a conditional:
  //     if (value) {
  //       this.testSubject.next(false);
  //     } else {
  //       this.testSubject.next(true);
  //     }
  //   });

    
  // }
}
