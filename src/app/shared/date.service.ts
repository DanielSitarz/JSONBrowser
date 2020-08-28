import { Moment } from 'moment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  public toTimestamp(moment: Moment): string {
    return moment.valueOf().toString().substring(0, 10);
  }
}
