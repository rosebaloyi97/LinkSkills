import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  techSkill: any[] = []; 
  total: number = 0;
  average: number = 0;
  highest: string[] = [];
  lowest: string[] = [];
  size: number = 0;

  constructor(private __store: StoreService) { }

  ngOnInit(): void {
    this.getTechnical();

  }

  yAxisTickFormatting(value){ 
    return this.percentTickFormatting(value);
  }

   percentTickFormatting(val: any) {
    return val.toLocaleString() + '%';
  }

  getTechnical()
  {
  this.__store.getTechnical().subscribe((data:any)=> {

    this.size = Object.keys(data).length;
    let keys = Object.keys(data);
    let max = data[keys[0]];
    let min = data[keys[0]];
    

    for(let i = 1; i < keys.length; i++) {
      let value = data[keys[i]];
      
        if(value.total > max.total) {
          max = value;
        }
        else
        if(value.total < min.total)
        {
          min = value;
        } 
        this.highest = max.name;
        this.lowest = min.name;
    }
   
   

    console.log('max'+ this.lowest);
    
    data.forEach((item: any) => {
      // calculate total
      this.total = this.total + item.total;
      // calculate average
      let size = Object.keys(item).length;

      // highest

      // if(item.total > max) {
      //   this.highest = {name: item.name, total: item.total};

      // }
      // console.log(`highest ${this.highest.name} \t ${this.highest.total}`);
      
    
      this.techSkill.push({name : item.name, value : item.total});

    });
    // this.average = this.total/this.size;
    // console.log(this.average);
    // console.log(`total is ${this.total}`);
    });
    
  }
}
