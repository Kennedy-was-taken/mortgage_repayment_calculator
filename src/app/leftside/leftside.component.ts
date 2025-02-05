import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Form } from './interfaces/form';
import { NgIf, NgClass } from '@angular/common';
import { SharedServiceService } from '../Services/shared-service.service';
import { CalculationsService } from '../Services/calculations.service';

@Component({
  selector: 'app-leftside',
  imports: [ ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css', './styles/landscape/mobileMedia.css', './styles/portrait/tabletMedia.css', './styles/landscape/tabletMedia.css', './styles/landscape/desktopMedia.css']
})
export class LeftsideComponent implements OnInit{
  
  dataForm : Form | undefined
  user: any;
  formData : FormGroup = new FormGroup({});
  RadioButton: string = "options";
  
  constructor(private fb : FormBuilder, private service : SharedServiceService) {}

  public onClickSubmit() : void {

    if(this.formData?.valid){
      const currentShowElement1 = this.service.getShowElement1Subject().getValue();
      const currentShowElement2 = this.service.getShowElement2Subject().getValue();

      this.dataForm = this.formData.value as Form;

      if(currentShowElement1 == true){
        const calculate = new CalculationsService(this.dataForm, this.service);
        calculate.MortgageDirector();

        this.service.updatevalues();
        this.service.updateRightSide1(!currentShowElement1);
        this.service.updateRightSide2(!currentShowElement2);
      }
    }
 
  }

  public btnClick() : void {
    const currentShowElement1 = this.service.getShowElement1Subject().getValue();
    const currentShowElement2 = this.service.getShowElement2Subject().getValue();
    const mortgageAmount = document.getElementById('mortgageAmount') as HTMLInputElement;
    const mortgageTerm = document.getElementById('mortgageTerm') as HTMLInputElement;
    const interestRate = document.getElementById('interestRate') as HTMLInputElement;

    if(mortgageAmount && mortgageTerm && interestRate){

      mortgageAmount.value = "";
      mortgageTerm.value = "";
      interestRate.value = "";
    }
    
    if(currentShowElement1 == false){
      this.service.updateRightSide1(!currentShowElement1);
      this.service.updateRightSide2(!currentShowElement2);
    }
    console.log("i got clicked");
  }

  ngOnInit(): void {

    this.formData = this.fb.group({
      mortgageAmount : ['', [Validators.required, Validators.min(1)]],
      mortgageTerm : ['', [Validators.required, Validators.min(1)]],
      interestRate : ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      radioBtn : [false]

    })
  }
}
