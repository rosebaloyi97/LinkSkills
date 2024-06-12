import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-future-tech',
  templateUrl: './future-tech.component.html',
  styleUrls: ['./future-tech.component.scss'],
})
export class FutureTechComponent implements OnInit {
  technology: any[] = [];
  total: number = 0;
  average: number = 0;
  highest: string[] = [];
  lowest: string[] = [];
  size: number = 0;

  saleData = [
    { name: 'Mobiles', value: 0 },
    { name: 'Laptop', value: 0 },
    { name: 'AC', value: 0 },
    { name: 'Headset', value: 0 },
    { name: 'Fridge', value: 0 },
  ];

  constructor(private _store: StoreService) {}

  ngOnInit(): void {
    this.getTechnology();
  }

  yAxisTickFormatting(value) {
    return this.percentTickFormatting(value);
  }

  percentTickFormatting(val: any) {
    return val.toLocaleString() + '%';
  }

  getTechnology() {
    this._store.getTechnology().subscribe((data: any) => {
      this.size = Object.keys(data).length;
      let keys = Object.keys(data);
      let max = data[keys[0]];
      let min = data[keys[0]];

      for (let i = 1; i < keys.length; i++) {
        let value = data[keys[i]];

        if (value.total > max.total) {
          max = value;
        } else if (value.total < min.total) {
          min = value;
        }
        this.highest = max.name;
        this.lowest = min.name;
      }

      console.log('max' + this.lowest);

      data.forEach((item: any) => {
        // calculate total
        this.total = this.total + item.total;
        // calculate average
        let size = Object.keys(item).length;
        this.technology.push({ name: item.name, value: item.total });
      });
    });
  }
}
