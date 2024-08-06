import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userinput',
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  imports: [FormsModule],
})
export class UserInputComponent {
  @Output() data = new EventEmitter<{
    InitialInvestment: number;
    AnnualInvestment: number;
    ExpectedReturn: number;
    Duration: number;
  }>();

  InitialInvestment = 0;
  ExpectedReturn = 0;
  AnnualInvestment = 0;
  Duration = 0;

  onSubmit() {
    this.data.emit({
      InitialInvestment: this.InitialInvestment,
      ExpectedReturn: this.ExpectedReturn,
      AnnualInvestment: this.AnnualInvestment,
      Duration: this.Duration,
    });
  }
}
