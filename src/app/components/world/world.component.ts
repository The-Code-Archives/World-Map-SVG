import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  @Output() name = new EventEmitter<string>();
  @Output() capital = new EventEmitter<string>();
  @Output() region = new EventEmitter<string>();
  @Output() income = new EventEmitter<string>();
  @Output() latitude = new EventEmitter<string>();
  @Output() longitude = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  onClickedCountry(event: MouseEvent)
  {
    const target = event.target as SVGElement;
    const countryId = target.id;

    console.log(target)
    this.apiService.getCountryInformation(countryId).subscribe((info: any) => {
      let data = info[1][0]
      this.name.emit(data.name);
      this.capital.emit(data.capitalCity);
      this.region.emit(data.region.value);
      this.income.emit(data.incomeLevel.value);
      this.latitude.emit(data.latitude);
      this.longitude.emit(data.longitude);
      console.log(data)
    });
  }


}


