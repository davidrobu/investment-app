import { Component, signal } from '@angular/core';
import { InvestmentResultsComponent } from '../../components/investment-results/investment-results.component';
import { RouterLink } from '@angular/router';
import { UserInputComponent } from '../../components/user-input/user-input.component';

@Component({
  selector: 'app-investment-calculator',
  standalone: true,
  imports: [UserInputComponent, InvestmentResultsComponent, RouterLink],
  templateUrl: './investment-calculator.component.html',
  styleUrl: './investment-calculator.component.css',
})
export class InvestmentCalculatorComponent {
  InitialInvestment = 0;
  AnnualInvestment = 0;
  ExpectedReturn = 0;
  Duration = 0;
  isSubmit = signal(false);

  onData(data: {
    InitialInvestment: number;
    AnnualInvestment: number;
    ExpectedReturn: number;
    Duration: number;
  }) {
    this.InitialInvestment = data.InitialInvestment;
    this.AnnualInvestment = data.AnnualInvestment;
    this.ExpectedReturn = data.ExpectedReturn;
    this.Duration = data.Duration;

    this.isSubmit.set(true);
  }
}
