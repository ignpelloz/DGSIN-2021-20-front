import { Component, OnInit } from '@angular/core';
import { Expenditure } from '../expenditure';
import { ExpenditureService } from '../expenditure.service';

@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.component.html',
  styleUrls: ['./expenditures.component.css']
})
export class ExpendituresComponent implements OnInit { // conrols the view: all the JS code needed to get the expenditures has to go in this class

  expenditures: Expenditure[];

  constructor(private expenditureService: ExpenditureService) { }

  ngOnInit(): void { // initialize expenditures here better than using the constructor
    // now from this component we dont know how the expenditures will be gotten: "we got independent from the way the expenditures will be gotten, the service will be in charge of that"
    //this.expenditures = this.expenditureService.getExpenditures();
    //this.expenditureService.getExpenditures().subscribe(
    //  (expenditures) => this.expenditures = expenditures
    //);
    this.getExpenditures();
  }

  getExpenditures(): void {
    this.expenditureService.getExpenditures().subscribe(
      (expenditures) => this.expenditures = expenditures
    );
  }

  addExpenditure(autonomous_community: string, // TODO: Validate the data before adding the data
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
      _ => { // this callback func. takes no parameters, hence '_'
        this.getExpenditures(); // reloads the list aftern an addition
      }
    );
  }

  deleteExpenditures(): void {
    this.expenditureService.deleteExpenditures().subscribe(
      _ => this.getExpenditures() // reloads the list aftern an addition
    )
  }

  deleteExpenditure(autonomous_community: string, year: number): void {
    this.expenditureService.deleteExpenditure(autonomous_community, year).subscribe(
      _ => this.getExpenditures() // reloads the list aftern an addition
    )
  }
}
