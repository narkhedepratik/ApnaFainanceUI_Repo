import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent {
  amount: number;
  rate: number;
  time: number;
  emi: string;

  calculate(): void {
    if (isNaN(this.amount) || isNaN(this.rate) || isNaN(this.time)) {
      alert("Please enter valid numeric values for all fields.");
      return;
    }

    const monthlyInterest = (this.rate / 100) / 12;
    const totalPayments = this.time;

    const emiValue = (this.amount * monthlyInterest * Math.pow(1 + monthlyInterest, totalPayments)) /
                     (Math.pow(1 + monthlyInterest, totalPayments) - 1);

    this.emi = emiValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
  }

}