import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './componentes';
import { CalculadoraService } from './servicos';

@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
