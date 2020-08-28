import { RequestStatus } from './../../shared/enums/RequestStatus';
import { Observable, Subscription } from 'rxjs';
import { JsonGetterService } from './../../shared/json-getter.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-browse-raw',
  templateUrl: './browse-raw.component.html',
  styleUrls: ['./browse-raw.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseRawComponent implements OnInit, OnDestroy {
  data: object[];
  data$: Subscription;
  requestStatus: RequestStatus;
  requestStatus$: Subscription;

  constructor(private jsonGetter: JsonGetterService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.data$ = this.jsonGetter.json$.subscribe(this.onDataChange.bind(this));
    this.requestStatus$ = this.jsonGetter.requestStatus$.subscribe(this.onRequestStatusChange.bind(this));
  }

  ngOnDestroy(): void {
    this.data$.unsubscribe();
  }

  onDataChange(v: object[]): void {
    this.data = v;
    this.cdr.detectChanges();
  }

  onRequestStatusChange(rq: RequestStatus): void {
    this.requestStatus = rq;
    this.cdr.detectChanges();
  }

  isEmpty() {
    return this.data?.length == 0;
  }

  isPending() {
    return this.requestStatus == RequestStatus.Pending;
  }

  isIdle() {
    return this.requestStatus == RequestStatus.Idle;
  }

}
