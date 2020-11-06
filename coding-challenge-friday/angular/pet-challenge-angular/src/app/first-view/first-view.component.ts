import { Component, Input, OnInit } from '@angular/core';
import { IPet } from '../common-resources/pet';
import { AjaxService } from '../services/ajax.service';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit{

  petListDisplay: IPet[];

  animalType = '';

  
  constructor(private myAjax: AjaxService) { }

  ngOnInit() {
  }

  firstButton() {

    this.myAjax.obtainAllPets().subscribe(
      data => {
        // console.logdata;
        this.petListDisplay = data;
      }
    );
  }

  secondButton(){
    this.myAjax.filterAnimalType(this.animalType).subscribe(
      (data) => {
        console.log(data);
        this.petListDisplay = data;
      }
    )
  }

}
