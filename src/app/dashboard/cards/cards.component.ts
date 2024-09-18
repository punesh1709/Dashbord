import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  showDiv1 = true;

  // Method to toggle between div1 and div2
  toggleDiv() {
    this.showDiv1 = !this.showDiv1;
  }
  
  showFirstCards = true;
  @Input() totalUsers!: number;
  @Input() totalSalary!: number;
  @Input() averageSalary!: number;
  @Input() totalIncrementedSalary!: number;

  @Input() totalCustomers: number = 0;
  @Input() totalAmount: number = 0;
  @Input() totalRevenue: number = 0;
  @Input() averageRevenue: number = 0;

  toggleCards() {
    this.showFirstCards = !this.showFirstCards;
  }
}