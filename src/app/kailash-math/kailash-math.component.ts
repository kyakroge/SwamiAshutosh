import { Component } from '@angular/core';

interface MahaMandaleswars {
  name: string;
  dob: string;
}

@Component({
  selector: 'app-kailash-math',
  templateUrl: './kailash-math.component.html',
  styleUrls: ['./kailash-math.component.scss']
})

export class KailashMathComponent {
  title = 'Swami Ashutoshanand';
  currentYear: any = 2023;
  data1: any = 'Hello, 1!' ;
  names: string[] = ["MM 1", "MM 2", "MM 3", "MM 4","MM 5", "MM 6", "MM 7", "MM 8"];
  mmDetails = {
    name:"Tom",
    address:"UK"
    };

    namesMap: Map<string, string[]>[] = [
      
    ];

    
    mahaMandaleswars: MahaMandaleswars[]=[
      {name:'MM1', dob:'87'},
      {name:'MM2', dob:'77'},
      {name:'MM3', dob:'84'},
      {name:'MM4', dob:'83'},
      {name:'MM5', dob:'97'},
      ];
  
}
