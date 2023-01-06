import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent {

  @Input() gender : string = "";
  @Input() name : string = "";
  @Input() forName : string = "";
  @Input() email : string = "";
  @Input() zip : string = "";
  @Input() city : string = "";
  @Input() country : string = "";
  @Input() address : string = "";
  @Input() phone : string = "";
  @Input() login : string = "";
  @Input() password : string = "";

}
