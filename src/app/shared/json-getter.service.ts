import { RequestStatus } from './enums/RequestStatus';
import { IJsonParameters } from './interfaces/IJsonParameters';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonGetterService {
  requestStatus$: BehaviorSubject<RequestStatus> = new BehaviorSubject<RequestStatus>(RequestStatus.Idle);
  json$: BehaviorSubject<object[]> = new BehaviorSubject<object[]>([]);

  constructor(private http: HttpClient) {

  }

  getJSON(jsonParams: IJsonParameters): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    let body = new HttpParams();

    if (jsonParams.data) {
      for (const [k, v] of Object.entries(jsonParams.data)) {
        if (v) {
          body = body.set(k, v);
        }
      }
    }

    this.requestStatus$.next(RequestStatus.Pending);

    this.http.post(
      jsonParams.url,
      body,
      httpOptions
    ).pipe(take(1)).subscribe(
      (json: object[]) => {
        this.json$.next(json);
        this.requestStatus$.next(RequestStatus.Complete);
      },
      (error) => {
        console.log(error);
        this.requestStatus$.next(RequestStatus.Error);
      }
    );
  }

  isPending$(): Observable<boolean> {
    return this.requestStatus$.pipe(map((rs: RequestStatus) => rs == RequestStatus.Pending))
  }

  isIdle$(): Observable<boolean> {
    return this.requestStatus$.pipe(map((rs: RequestStatus) => rs == RequestStatus.Idle))
  }

  isComplete$(): Observable<boolean> {
    return this.requestStatus$.pipe(map((rs: RequestStatus) => rs == RequestStatus.Complete))
  }

  isError$(): Observable<boolean> {
    return this.requestStatus$.pipe(map((rs: RequestStatus) => rs == RequestStatus.Error))
  }
}
