import { CountryModel } from '../../../core/models/country.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryModel[]> {
    return this.http
      .get<CountryModel[]>('https://restcountries.com/v3.1/all')
      .pipe(catchError((err) => throwError(err)));
  }
}
