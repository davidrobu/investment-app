import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userinput',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule ]
})
export class UserInputComponent {
    @Output() submit = new EventEmitter<{}>()
    InitialInvestment=''
    ExpectedReturn=''
    AnnualInvestment=''
    Duration=''
    
    onSubmit(){
      console.log('hi')
        this.submit.emit({
        InitialInvestment:this.InitialInvestment,
        ExpectedReturn: this.ExpectedReturn,
        AnnualInvestment:this.AnnualInvestment,
        Duration:this.Duration

        })
    }
}
