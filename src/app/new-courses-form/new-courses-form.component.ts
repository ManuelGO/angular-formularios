import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms'

@Component({
  selector: 'courses-form',
  templateUrl: './new-courses-form.component.html',
  styleUrls: ['./new-courses-form.component.css']
})
export class NewCoursesFormComponent  {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value="";
  
  }
  removeItem(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }



}
