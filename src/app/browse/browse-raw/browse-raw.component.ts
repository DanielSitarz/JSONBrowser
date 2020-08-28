import { JsonGetterService } from './../../shared/json-getter.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse-raw',
  templateUrl: './browse-raw.component.html',
  styleUrls: ['./browse-raw.component.scss']
})
export class BrowseRawComponent implements OnInit {
  json$: Observable<string>;

  constructor(public jsonGetter: JsonGetterService) { }

  ngOnInit(): void {
    this.json$ = this.jsonGetter.json$;
  }

  hasAnyData(jsonArr: Array<string>) {
    return jsonArr.length > 0;
  }

  isEmpty(jsonArr: Array<string>) {
    return jsonArr.length == 0;
  }

}
