import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SodaClient } from './client';

export * from "./client";
export * from "./soql";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule]
})
export class SodaClientModule {
  static forRoot(): ModuleWithProviders<SodaClientModule> {
    return {
        ngModule: SodaClientModule,
        providers: [SodaClient]
    };
  }
}