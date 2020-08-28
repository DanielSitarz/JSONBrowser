import { getURL, ENDPOINT } from './../../app-api';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-browse-url-input',
  templateUrl: './browse-url-input.component.html',
  styleUrls: ['./browse-url-input.component.scss']
})
export class BrowseUrlInputComponent {
  _url: string = getURL(ENDPOINT.latestData.players);

  @Output() onSubmit = new EventEmitter<string>();
  @Input() dataProcessing: boolean = false;

  constructor() { }

  public submit(): void {
    this.onSubmit.emit(this._url);
  }
}
