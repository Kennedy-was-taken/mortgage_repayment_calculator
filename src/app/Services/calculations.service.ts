import { Injectable } from '@angular/core';
import { Form } from '../leftside/interfaces/form';
import { SharedServiceService } from './shared-service.service';

export class CalculationsService {

  //class object
  private mortgageClass : Form;

  constructor(private values : Form, private service : SharedServiceService) {
    this.mortgageClass = values
  }

  public MortgageDirector() : void {
    
    const P = this.mortgageClass.mortgageAmount;
    const r = (this.mortgageClass.interestRate / 100) / 12;
    const n = (this.mortgageClass.mortgageTerm * 12); 


    if(this.mortgageClass.radioBtn == true){
      this.Repayment(P, r, n);
    }

    else{
      this.Interest(P, r, n);
    }
  }

  private Repayment(P : number, r : number, n : number) : void{

    const dividend = r * ( Math.pow( ( 1 + r ) , n) );
    const divisor = Math.pow( ( 1 + r ) , n) - 1;
    const monthlyPayment = P * ( dividend / divisor );
    const roundedMonthlyPayment = Math.round( monthlyPayment * 100 ) / 100;
    const totalCost = roundedMonthlyPayment * n;
    const roundedTotalCost = Math.round( totalCost * 100 ) / 100;

    this.service.setValues(roundedTotalCost, roundedMonthlyPayment);

  }

  private Interest(P : number, r : number, n : number) : void{

    const monthlyInterestPayment = (r * P);
    const roundedMonthlyInterestPayment = Math.round( monthlyInterestPayment * 100 ) / 100;
    const totalCost = ( roundedMonthlyInterestPayment * n );
    const roundedTotalCost = Math.round( totalCost * 100 ) / 100;

    this.service.setValues(roundedTotalCost, roundedMonthlyInterestPayment);
  }
}
