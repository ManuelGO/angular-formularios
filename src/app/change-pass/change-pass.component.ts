import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { PassValidators } from './oldpass.validator'

@Component({
  selector: 'change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent  {
  form: FormGroup;
  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      oldpass: ['',Validators.required, PassValidators.shouldBeOldPass],
      newpass: ['', Validators.required],
      confirmpass: ['', Validators.required]
    },{
      validator: PassValidators.shouldBeTheSame
    })
  }
  
  get oldpass(){
    return this.form.get('oldpass');
  }

  get newpass(){
    return this.form.get('newpass');
  }

  get confirmpass(){
    return this.form.get('confirmpass');
  }


}
