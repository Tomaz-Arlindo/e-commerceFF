import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component'; // Importa o MenuComponent
import { ContatoComponent } from './contato/contato.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  { path: '', component: MenuComponent }, // Rota padrão redirecionando para Menu
  { path: 'contato', component: ContatoComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: '**', redirectTo: '' }, // Rota wildcard redireciona para a página padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
