import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})

export class ListaPrenComponent implements OnInit {

  isListVisible: boolean = false;
  @Input() bookings : Booking[];

  constructor() {}

  showHideList(): boolean
  {
      if (this.isListVisible)
        this.isListVisible = false;

      if (!this.isListVisible)
        this.isListVisible = true;

      return false;
  }

  ngOnInit() {

  }

}
