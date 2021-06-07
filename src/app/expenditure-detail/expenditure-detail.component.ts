import { Component, OnInit } from '@angular/core';
import { Expenditure } from '../expenditure';
import { ExpenditureService } from '../expenditure.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-expenditure-detail',
  templateUrl: './expenditure-detail.component.html',
  styleUrls: ['./expenditure-detail.component.css']
})
export class ExpenditureDetailComponent implements OnInit {

  expenditure: Expenditure;

  constructor(private expenditureService: ExpenditureService,
    private route: ActivatedRoute,
    private location: Location) {
    this.expenditure = { // to avoid undefined 'autonomous_community' because of the asynchronousnes
      autonomous_community: "",
      year: Number(),
      avg_expenditure_household: Number(),
      avg_expenditure_person: Number(),
      porcentual_distribution: Number()
    }
  }

  ngOnInit(): void {
    this.getExpenditure();
  }

  getExpenditure(): void {
    this.expenditureService.getExpenditure(this.route.snapshot.paramMap.get('autonomous_community'),
      JSON.parse(this.route.snapshot.paramMap.get('year')))
      .subscribe(expenditure => this.expenditure = expenditure);
  }

  saveExpenditure(): void {
    var updatedExpenditure = this.expenditure
    delete updatedExpenditure["_id"]
    this.expenditureService.updateExpenditure(updatedExpenditure)
      .subscribe(
        success => {
          this.goBack();
          if (!success) {
            alert("Error updating resource") // TODO: works but the message is useless
          }else{
            alert("Resource updated")
          }
          console.log(success)
        });
  }

  goBack(): void {
    this.location.back();
  }
}
