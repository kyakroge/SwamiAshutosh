import { Component } from '@angular/core';

interface MahaMandaleswars {
  item: string;
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
      {item: 'item1', name:'महामंडलेश्वर स्वामी कैलाश पर्वत जी महाराज', dob:'87', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/kailash-parvat?updatedAt=1686760095607'},
      {item: 'item2', name:'महामंडलेश्वर स्वामी सत्यानंद गिरि जी महाराज', dob:'77', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {item: 'item3', name:'महामंडलेश्वर स्वामी पूर्णानन्द गिरि जी महाराज', dob:'84', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/poornanand?updatedAt=1686760159961'},
      {item: 'item4', name:'महामंडलेश्वर स्वामी कृपानन्द जी महाराज', dob:'83', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      {item: 'item5', name:'महामंडलेश्वर स्वामी प्रेमपुरी जी महाराज', dob:'97', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/prempuri?updatedAt=1686760227621'},
      {item: 'item6', name:'महामंडलेश्वर स्वामी नारायण गिरि जी महाराज', dob:'97', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/narayan?updatedAt=1686759710287'},
      {item: 'item7', name:'महामंडलेश्वर स्वामी विष्णुदेवानंद गिरि जी महाराज', dob:'97', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/vishnudevanand'},
      {item: 'item8', name:'महामंडलेश्वर स्वामी प्रकाशानंद गिरि जी महाराज', dob:'97', imgUrl:'https://ik.imagekit.io/kailash/maha-mandaleswars/prakashanand?updatedAt=1686759994707'},
      {item: 'item9', name:'महामंडलेश्वर स्वामी रामचन्द्र गिरि जी महाराज', dob:'97', imgUrl: 'https://ik.imagekit.io/kailash/telegram/tr:w-200,f-jpg,pr-true/IMG-20230517-WA0008.jpg'},
      ];
  
}
