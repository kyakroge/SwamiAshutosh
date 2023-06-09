import { Component } from '@angular/core';

interface MahaMandaleswars {
  name: string;
  dob: string;
  imgUrl:string;
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
      {name:'MM1', dob:'87', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {name:'MM2', dob:'77', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {name:'MM3', dob:'84', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {name:'MM4', dob:'83', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {name:'MM5', dob:'97', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {name:'MM6', dob:'97', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {name:'MM7', dob:'97', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {name:'MM8', dob:'97', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      ];
  
}
