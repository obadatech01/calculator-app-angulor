import { Component } from '@angular/core';

@Component({
  selector: 'app-button-num',
  templateUrl: './button-num.component.html',
  styleUrls: ['./button-num.component.scss']
})
export class ButtonNumComponent {

  outputValue: string = "0";
  currValue: number= 0;
  prevValue!: number;
  currentOperate!: string;
  operateValid: any;
  watchOperate: string= '';

  constructor() {
  }

  print(event: any) {
    this.clickedKey(event);
    this.currValue += Number(event.target.textContent);
    console.log('2- ',this.prevValue);
  }

  operatorKey(event: any) {
    this.prevValue = this.currValue;
    this.currValue = 0;
    this.clickedKey(event);
    this.currentOperate = event.target.textContent
    this.equalClick();
    switch (event.target.textContent) {
      case '+':
        console.log('3- ',this.currValue);
        // this.outputValue = (this.prevValue + this.currValue).toString();
        break;
      default:
        break;
    }
  }

  equalClick() {
    // this.clickedKey(event);
    switch (this.currentOperate) {
      case '+':
        this.outputValue = (this.prevValue + this.currValue).toString();
        this.prevValue = this.currValue;
        this.currValue = 0;
        break;
      default:
        break;
    }
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
    this.currValue = 0;
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

