import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  outputValue: string = "0";
  currentValue: number= 0;
  prevValue: number = 0;
  currentOperate!: string;
  operateValid: any;
  watchOperate: string= '';

  constructor() {
  }

  ngOnInit(): void {
  }

  print(event: any) {
    this.outputValue += Number(event.target.textContent);
    this.clickedKey(event);
  }

  operatorKey(event: any) {
    this.clickedKey(event);
    this.currentOperate = event.target.textContent
    switch (event.target.textContent) {
      case '+':
        this.operate(event.target.textContent);
        break;
      case '-':
        this.operate(event.target.textContent);
        break;
      case '*':
        this.operate(event.target.textContent);
        break;
      case '/':
        this.operate(event.target.textContent);
        break;
      default:
        break;
    }
  }

  equalClick(event: any) {
    this.clickedKey(event);
    switch (this.currentOperate) {
      case '+':
        this.outputValue = (this.currentValue + Number(this.outputValue)).toString();
        break;
      case '-':
        this.outputValue = (this.currentValue - Number(this.outputValue)).toString();
        break;
      case '*':
        this.outputValue = (this.currentValue * Number(this.outputValue)).toString();
        break;
      case '/':
        if(+this.outputValue != 0) {
          this.outputValue = (this.currentValue / Number(this.outputValue)).toString();
        } else {
          this.outputValue = "0";
          this.validDivOperate()
        }
        break;

      default:
        this.outputValue = "0"
        break;
    }
  }

  operate(op: string) {
    this.watchOperate= '';
    this.currentValue = Number(this.outputValue);
    this.watchOperate = Number(this.currentValue) + ' ' + this.currentOperate;
    this.outputValue = "0";
  }

  delClick(event: any) {
    this.clickedKey(event);
    if(this.outputValue.length > 1) {
      this.outputValue = this.outputValue.slice(0, -1);
    } else {
      this.outputValue = '0';
      this.watchOperate= '';
    }

  }

  resetClick(event: any) {
    this.clickedKey(event);
    this.watchOperate= '';
    this.outputValue = "0";
    this.currentValue = 0;
  }

  validDivOperate() {
    this.operateValid = document.getElementById('validate')
    this.operateValid.classList.remove('hidden')
    this.operateValid.style.opacity = 0.8
    this.operateValid.style.transition = '1s'

    setTimeout(() => {
    this.operateValid.style.transform = 'scale(0.9,0.9)'
    this.operateValid.style.opacity = 0.4
    }, 2000);
    setTimeout(() => {
      this.operateValid.classList.add('hidden')
    }, 3000);
  }

  clickedKey(event: any) {
    event.target.style.transition = '1s';
    event.target.style.transform = 'scale(0.8,0.8)';
    setTimeout(() => {
      event.target.style.transform = 'scale(1,1)';
    }, 1000);
  }

}
