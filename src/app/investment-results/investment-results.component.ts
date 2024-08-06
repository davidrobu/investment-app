import { Component,  Input } from '@angular/core';
@Component({
  selector: 'app-investment',
  standalone: true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
  imports: []
})
export class InvestmentResultsComponent {
  @Input({required:true}) InitialInvestment!:any
  @Input({required:true}) ExpectedReturn!:any
  @Input({required:true}) Duration!:any
  @Input({required:true}) AnnualInvestment!:any
  annualData = [];
  calculateInvestmentResults(this:any) {
    let investmentValue = this.InitialInvestment;
    const expectedReturn = this.ExpectedReturn
    const annualInvestment= this.AnnualInvestment
    const duration= this.Duration
    const initialInvestment= this.InitialInvestment
  
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    return this.annualData;
  }
   
  
}
