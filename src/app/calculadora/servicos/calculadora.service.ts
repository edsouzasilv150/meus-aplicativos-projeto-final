/**
 * Serviço responsável por executar as operações da
 * calculadora.
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /**
   * Define as constantes utilizadas
   * para identificar as operações de cálculo.
   */

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Implementação do método que executa as operações matemática dado
   * dois números.
   * Suporta as operações soma, subtração, divisão e multiplicação.
   */

  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number; // armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
    
      default:
        resultado
         = 0;
        break;
    }
    return resultado;
  }
}
