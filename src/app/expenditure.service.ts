import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // similar to promises
import { catchError } from 'rxjs/operators';
import { Expenditure } from './expenditure';
import { EXPENDITURES } from './mock-expenditures';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {

  //private expendituresUrl = "http://localhost:8080/api/v1/alcohol-tobacco-exps"; // backend's local URL
  private expendituresUrl = "http://dgsin-2021-20.herokuapp.com/api/v1/alcohol-tobacco-exps"; // backend's Heroku URL

  private httpOptions = {
    header: new HttpHeaders({ 'Content-Type': 'application/json'}),
    responseType: 'text' as 'text'
  }

  constructor(private http: HttpClient) { }

  getExpenditures(): Observable<Expenditure[]> {
    //return EXPENDITURES;
    return this.http.get<Expenditure[]>(this.expendituresUrl)
    .pipe( // similar to Unix' '|'
      catchError(this.handleError<Expenditure[]>('getExpenditures', []))
    );
  }

  getExpenditure(autonomous_community: string, year: number): Observable<Expenditure> {
    return this.http.get<Expenditure>(`${this.expendituresUrl}/${autonomous_community}/${year}`)
    .pipe(
      catchError(this.handleError<Expenditure>(`getExpenditure autonomous_community=${autonomous_community}`)) // TODO: take year too
    );
  }

  updateExpenditure(updatedExpenditure: Expenditure): Observable<Expenditure> {
    //alert("hello")
    return this.http.put<Expenditure>(`${this.expendituresUrl}/${updatedExpenditure.autonomous_community}/${updatedExpenditure.year}`,updatedExpenditure) // TODO: do here all the checks (right format and fields, etc)
    .pipe(
      catchError(this.handleError<Expenditure>(`updatedExpenditure autonomous_community=${updatedExpenditure.autonomous_community}`)) // TODO: take year too
    );
  }

  addExpenditure(newExpenditure: Expenditure): Observable<any> { // returns 201
    return this.http.post(this.expendituresUrl, newExpenditure, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('addExpenditure'))
    )
  }

  deleteExpenditures(): Observable<any>{
    return this.http.delete(this.expendituresUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('deleteExpenditures'))
    )
  }

  deleteExpenditure(autonomous_community: string, year: number): Observable<any>{
    //alert("hello")
    console.log("This is the service")
    return this.http.delete(`${this.expendituresUrl}/${autonomous_community}/${year}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>(`deleteExpenditure autonomous_community=${autonomous_community}`)) // TODO: take year too
    )
  }

  private handleError<T>(operation = "operation", result?: T){ // No type here, means any return would do
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
