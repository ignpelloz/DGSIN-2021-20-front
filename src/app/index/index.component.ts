import { Component, OnInit } from '@angular/core';
import { Index } from '../index';
//import { ExpenditureService } from '../expenditure.service';

@Component({
  selector: 'app-expenditures',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent { // controls the view: all the JS code needed to get the expenditures has to go in this class

  //expenditures: Expenditure[];

  constructor() { }
  ngOnInit(): void {}

}
