import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.less']
})
export class BioComponent implements OnInit {

  isVisible: boolean = false; //the div starts out hidden

  constructor() { }

  ngOnInit(): void {
  }

  //when we click the button
  onClick(){
    //check if the div is visible
    if(this.isVisible === false){
      this.isVisible = true; //make it visible
    }
    else{
      this.isVisible = false; //return to hidden
    }

  }

}
