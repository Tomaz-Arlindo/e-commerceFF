import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContatoComponent } from './contato/contato.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  { path: '', component: MenuComponent }, // Página inicial (Menu)
  { path: 'contato', component: ContatoComponent }, // Página de Contato
  { path: 'avaliacao', component: AvaliacaoComponent }, // Página de Avaliação
  { path: 'carrinho', component: CarrinhoComponent }, // Página do Carrinho
  { path: '**', redirectTo: '' }, // Rota coringa para redirecionar em caso de rota inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
