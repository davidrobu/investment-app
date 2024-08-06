import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
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
