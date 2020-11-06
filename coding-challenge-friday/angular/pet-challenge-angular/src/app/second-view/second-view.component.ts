import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPet } from '../common-resources/pet';
import { AjaxService } from '../services/ajax.service';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {

  pet: IPet;
  constructor(private myAjax: AjaxService) { }

  response =  '';
  form = new FormGroup({
    petName: new FormControl('', [Validators.required]),
    petType: new FormControl('', [Validators.required]) 
  })
  ngOnInit() {
    this.pet = {
      petId: 0,
      petName: '',
      animalType: ''
    };
  }

  createPet(){
    console.log(this.pet);
    this.pet["petName"] = this.form.controls['petName'].value;
    this.pet["animalType"] = this.form.controls['petType'].value;
    this.myAjax.createPet(this.pet).subscribe(
      data => {
        this.response = 'Pet register successfully';
      }
    );
  }
}
