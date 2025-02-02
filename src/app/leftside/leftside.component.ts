import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Form } from './interfaces/form';

@Component({
  selector: 'app-leftside',
  imports: [ ReactiveFormsModule],
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css', './styles/landscape/mobileMedia.css', './styles/portrait/tabletMedia.css', './styles/landscape/tabletMedia.css']
})
export class LeftsideComponent implements OnInit{
  
  user: Form | null | undefined;
  formData : FormGroup = new FormGroup({});

  public onClickSubmit() : void {

  }

  public btnClick() : void {
    const mortgageAmount = document.getElementById('mortgageAmount') as HTMLInputElement;
    const mortgageTerm = document.getElementById('mortgageTerm') as HTMLInputElement;
    const interestRate = document.getElementById('interestRate') as HTMLInputElement;

    if(mortgageAmount && mortgageTerm && interestRate){

      mortgageAmount.value = "";
      mortgageTerm.value = "";
      interestRate.value = "";
    }
    
    console.log("i got clicked");
  }

  ngOnInit(): void {

    this.formData = new FormGroup({
      mortgageAmount : new FormControl(0),
      mortgageTerm : new FormControl(0),
      interestRate : new FormControl(0),
      repayment : new FormControl(false),
      interestOnly : new FormControl(false)

    })
  }
}
