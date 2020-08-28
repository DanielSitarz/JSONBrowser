import { Observable } from 'rxjs';
import { DateService } from './../../shared/date.service';
import { IJsonParameters } from './../../shared/interfaces/IJsonParameters';
import { JsonGetterService } from './../../shared/json-getter.service';
import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Moment } from 'moment';

@Component({
  selector: 'app-browse-control',
  templateUrl: './browse-control.component.html',
  styleUrls: ['./browse-control.component.scss']
})
export class BrowseControlComponent implements OnInit {
  startDate: Moment;
  endDate: Moment;

  constructor(public jsonGetterService: JsonGetterService, private dateService: DateService) { }

  ngOnInit(): void {
  }

  setStartDate(ev: MatDatepickerInputEvent<Moment>): void {
    this.startDate = ev.value;
  }

  setEndDate(ev: MatDatepickerInputEvent<Moment>): void {
    this.endDate = ev.value?.endOf("day");
  }

  getJSON(url: string): void {
    const params: IJsonParameters = {
      url: url,
      data: {
        startDate: this.startDate ? this.dateService.toTimestamp(this.startDate) : null,
        endDate: this.endDate ? this.dateService.toTimestamp(this.endDate) : null
      }
    }

    this.jsonGetterService.getJSON(params);
  }

}
