import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-cards2',
  templateUrl: './cards2.component.html',
  styleUrl: './cards2.component.css'
})
export class Cards2Component {

  @Input() totalCustomers: number = 0;
  @Input() totalOrders: number = 0;
  @Input() totalRevenue: number = 0;
  @Input() averageRevenue: number = 0;
}
