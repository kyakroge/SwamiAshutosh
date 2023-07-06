import { Component } from '@angular/core';

interface MahaMandaleswars {
  item: string;
  name: string;
  dura: string;
  imgUrl:string;
}

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.scss']
})
export class LeftColumnComponent {
  books:String[]=[
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-2.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-3.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-4.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-5.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-6.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-7.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-8.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-9.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-10.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-11.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-12.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-13.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-14.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-15.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-16.jpg?tr=q-1,pr-true',
  ];
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
      {item: 'item1', name:'महामंडलेश्वर स्वामी कैलाश पर्वत जी महाराज', dura:'1886  से 1900 तक महामण्डलेश्वर ', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/IMG-20230517-WA0000.jpg?updatedAt=1688385701008'},
      {item: 'item2', name:'महामंडलेश्वर स्वामी सत्यानंद गिरि जी महाराज', dura:'1900 से 1915 तक महामण्डलेश्वर ', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/prempuri?updatedAt=1688385796886'},
      {item: 'item3', name:'महामंडलेश्वर स्वामी पूर्णानन्द गिरि जी महाराज', dura:'1915 से 1930 तक महामण्डलेश्वर ', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/poornanand?updatedAt=1686760159961'},
      {item: 'item4', name:'महामंडलेश्वर स्वामी कृपानन्द जी महाराज', dura:'1930 से 1945 तक महामण्डलेश्वर ', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/kripa?updatedAt=1688385932047'},
      {item: 'item5', name:'महामंडलेश्वर स्वामी प्रेमपुरी जी महाराज', dura:'1945 से 1952 तक महामण्डलेश्वर ', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/prempuri?updatedAt=1686760227621'},
      {item: 'item6', name:'महामंडलेश्वर स्वामी नारायण गिरि जी महाराज', dura:'1952 से 1962 तक महामण्डलेश्वर ', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/narayan?updatedAt=1686759710287'},
      {item: 'item7', name:'महामंडलेश्वर स्वामी विष्णुदेवानंद गिरि जी महाराज', dura:'1962 से 1975 तक महामण्डलेश्वर ', imgUrl: 'https://ik.imagekit.io/kailash/maha-mandaleswars/vishnudevanand?updatedAt=1688386068011'},
      {item: 'item8', name:'महामंडलेश्वर स्वामी प्रकाशानंद गिरि जी महाराज', dura:'1975 से 1986 तक महामण्डलेश्वर ', imgUrl:'https://ik.imagekit.io/kailash/maha-mandaleswars/prakashanand?updatedAt=1686759994707'},
      {item: 'item9', name:'महामंडलेश्वर स्वामी रामचन्द्र गिरि जी महाराज', dura:'1986 से 2019 तक महामण्डलेश्वर ', imgUrl: 'https://ik.imagekit.io/kailash/ramchandra-giri/ramchandra-giri1.jpeg?updatedAt=1688386474351'},
      ];

}
