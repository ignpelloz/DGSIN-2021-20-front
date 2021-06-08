import { Component, OnInit } from '@angular/core';
import { Expenditure } from '../expenditure';
import { ExpenditureService } from '../expenditure.service';

@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.component.html',
  styleUrls: ['./expenditures.component.css']
})

export class ExpendituresComponent implements OnInit { // controls the view: all the JS code needed to get the expenditures has to go in this class

  expenditures: Expenditure[];

  checkResponse(subRes: string, failMsg: string, successMsg: string): void{
    this.getExpenditures(); // reloads the list
    if (subRes === undefined) {
      alert(failMsg)
    }else{
      alert(successMsg)
    }
    console.log(subRes)
  }

  constructor(private expenditureService: ExpenditureService) { }

  ngOnInit(): void { // initialize expenditures here better than using the constructor
    this.getExpenditures();
  }

  getExpenditures(): void {
    this.expenditureService.getExpenditures().subscribe(
      (expenditures) => this.expenditures = expenditures
    );
  }

  addExpenditure(autonomous_community: string, // TODO: Validate the data before adding it
    year: number,
    avg_expenditure_household: number,
    avg_expenditure_person: number,
    porcentual_distribution: number): void {
    autonomous_community = autonomous_community.trim();
    if (!autonomous_community) {
      return;
    }

    this.expenditureService.addExpenditure({
                                     autonomous_community,
                                     year,
                                     avg_expenditure_household,
                                     avg_expenditure_person,
                                     porcentual_distribution
                                   }).subscribe(
      success => {
        this.checkResponse(success,"Error adding new resource","New resource added")
      }
    );
  }

  loadInitialData():void {
    this.expenditureService.loadInitialData().subscribe(
      success => {
        this.checkResponse(success,"Error loading initial data","Loaded initial data")
      }
    )
  }

  deleteExpenditures(): void {
    this.expenditureService.deleteExpenditures().subscribe(
      success => {
        this.checkResponse(success,"Error deleting resources","All resources deleted")
      }
    )
  }

  deleteExpenditure(autonomous_community: string, year: number): void {
    this.expenditureService.deleteExpenditure(autonomous_community, year).subscribe(
      success => {
        this.checkResponse(success,"Error deleting resource","Resource deleted")
      }
    )
  }
}
