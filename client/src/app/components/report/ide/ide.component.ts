import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss'],
})
export class IdeComponent implements OnInit {
  ide: any[] = [];
  total: number = 0;
  average: number = 0;
  highest: string[] = [];
  lowest: string[] = [];
  size: number = 0;

  constructor(private __store: StoreService) {}

  ngOnInit(): void {
    this.getIDE();
  }

  yAxisTickFormatting(value) {
    return this.percentTickFormatting(value);
  }

  percentTickFormatting(val: any) {
    return val.toLocaleString() + '%';
  }

  getIDE() {
    this.__store.getIDE().subscribe((data: any) => {
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
        this.ide.push({ name: item.name, value: item.total });
      });
      
    });
  }
}
