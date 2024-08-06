import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {
InitialInvestment=''
AnnualInvestment=''
ExpectedReturn=''
Duration=''
isSubmit=signal(false)
  onSubmit(InitialInvestment:any, AnnualInvestment:any, ExpectedReturn:any,Duration:any){
InitialInvestment: InitialInvestment;
AnnualInvestment:AnnualInvestment;
ExpectedReturn:ExpectedReturn;
Duration:Duration;
  }
  debug(){
    console.log('hello')
    this.isSubmit.set(true)
  }
}
