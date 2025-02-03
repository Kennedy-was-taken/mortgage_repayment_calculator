import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Form } from './interfaces/form';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-leftside',
  imports: [ ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css', './styles/landscape/mobileMedia.css', './styles/portrait/tabletMedia.css', './styles/landscape/tabletMedia.css', './styles/landscape/desktopMedia.css']
})
export class LeftsideComponent implements OnInit{
  
  user: any;
  formData : FormGroup = new FormGroup({});

  
  constructor(private fb : FormBuilder) {}

  public onClickSubmit() : void {

      console.log('Form data:', this.formData.value);

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

    this.formData = this.fb.group({
      mortgageAmount : ['', [Validators.required, Validators.min(1), Validators.max(999999)]],
      mortgageTerm : ['', [Validators.required, Validators.min(1), Validators.max(350)]],
      interestRate : ['', [Validators.required, Validators.min(0), Validators.max(50)]]

    })
  }
}
