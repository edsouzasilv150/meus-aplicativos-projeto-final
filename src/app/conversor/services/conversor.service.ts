import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  Conversao,
  ConversaoResponse
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  /*Devido a limitação do plano ser free na Fixer, 
  a url só faz conversão do Euro para as demais moedas. */
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=743c36421d5cfddd9c646c5c3c833793"
  constructor(private http: HttpClient) { }

  /**
   * Realiza a chamada para a API de conversão de moedas.
   * 
   * @param conversao Conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http
      .get(this.BASE_URL + params);
      //.map(response => response.json() as ConversaoResponse)
      //.catch(error => Observable.throw(error));
  }

  /**
   * Retorna a cotação para dado uma response.
   * 
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, 
    conversao: Conversao): number {
      if(conversaoResponse === undefined) {
        return 0;
      }
      return conversaoResponse.rates[conversao.moedaPara];
    }

  /**
   * Retorna a cotacao de dado uma response.
   * 
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse,
    conversao: Conversao): string {
      if(conversaoResponse === undefined) {
        return '0';
      }

      return (1 / conversaoResponse.rates[conversao.moedaPara])
          .toFixed(4);
    }
    
  /**
   * Retorna a data da cotação dado uma response.
   * 
   * @param ConversaoResponse conversaoResponse
   * @return string
  */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return ' ';
    }
    return conversaoResponse.date;
  }

}
