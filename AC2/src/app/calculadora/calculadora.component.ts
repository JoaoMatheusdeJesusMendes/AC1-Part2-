import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit{
  form: FormGroup;
  resultadoNum: number = 0;
  resultadoIMC: string = '';
  peso: number = 0;
  altura: number = 0;

  constructor(){}
  ngOnInit():void{
    this.form = new FormGroup({
      peso: new FormControl( 0, [Validators.required, Validators.min(1), Validators.max(500)]),
      altura: new FormControl(0, [Validators.required, Validators.min(0.01), Validators.max(3)])
    });
  }
  calcular(){
    this.resultadoNum = this.peso / (this.altura * this.altura);
    if(this.resultadoNum < 18.5)
    {
      this.resultadoIMC = "Abaixo do Peso - ";
    }
    else if(18.5 <= this.resultadoNum && this.resultadoNum <= 24.9)
    {
      this.resultadoIMC = "Peso Normal - ";
    }
    else if(25.0 <= this.resultadoNum && this.resultadoNum <= 29.9)
    {
      this.resultadoIMC = "Excesso de Peso - ";
    }
    else if(30.0 <= this.resultadoNum && this.resultadoNum <= 34.9)
    {
      this.resultadoIMC = "Obsidade Classe 1 - ";
    }
    else if(35.0 <= this.resultadoNum && this.resultadoNum <= 39.9)
    {
      this.resultadoIMC = "Obesidade Classe 2 - ";
    }
    else if(this.resultadoNum > 40.0)
    {
      this.resultadoIMC = "Obsidade Classe 3 - ";
    }

  }
}
