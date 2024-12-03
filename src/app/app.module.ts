import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { ContatoComponent } from './contato/contato.component';
import { MenuComponent } from './menu/menu.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CustomTooltipDirective } from './directives/custom-tooltip.directive';
import { LoadingIconDirective } from './directives/loading-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    AvaliacaoComponent,
    ContatoComponent,
    MenuComponent,
    TruncatePipe,
    CustomTooltipDirective,
    LoadingIconDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
