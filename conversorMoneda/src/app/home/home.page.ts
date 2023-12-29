import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cantidad: number = 0;
  resultado: number = 0;
  tipoMoneda: string ="";

  constructor() {}

  
  calcular(){

  if(this.cantidad != null){

    if(this.tipoMoneda == "euro"){
      this.resultado = parseFloat(this.dolarAeuro().toFixed(2));
    }else{
      this.resultado = parseFloat(this.euroAdolar().toFixed(2));

      }
    }

  }

  euroAdolar() {
    return this.cantidad*1.11;
  }

  dolarAeuro(){
    return this.cantidad*0.90;
  }

  reiniciar(){
    this.cantidad = 0;
    this.resultado = 0;
  }

}