import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxSodaService } from './ngx-soda.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
})
export class NgxSodaModule {
  static forRoot(): ModuleWithProviders<NgxSodaModule> {
    return {
      ngModule: NgxSodaModule,
      providers: [NgxSodaService],
    };
  }
}
