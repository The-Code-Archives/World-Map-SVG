import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D280';
  name!: string;
  capital!: string;
  region!: string;
  income!: string;
  latitude!: string;
  longitude!: string;


  onNameChange(value: string) {
    this.name= value;
  }

  onCapitalChange(value: string) {
    this.capital = value;
  }

  onRegionChange(value: string) {
    this.region = value;
  }

  onIncomeChange(value: string) {
    this.income = value;
  }

  onLatitudeChange(value: string) {
    this.latitude = value;
  }

  onLongitudeChange(value: string) {
    this.longitude = value;
  }

}


