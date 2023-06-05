import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mahamandaleswar-card',
  templateUrl: './mahamandaleswar-card.component.html',
  styleUrls: ['./mahamandaleswar-card.component.scss']
})
export class MahamandaleswarCardComponent {
  @Input() receivedData:any;
  @Input() mmDetails:any;
  @Input() mahaMandaleswars:any;
}
