import { Component, OnInit } from '@angular/core';
import { IPet } from '../common-resources/pet';
import { AjaxService } from '../services/ajax.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  petListDisplay: IPet[];

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

}
