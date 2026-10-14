import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Jogo } from '../../models/jogo.model';
import { JogoService } from '../../services/jogo.service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-jogos',
  styleUrl: './jogos.css',
  templateUrl: './jogos.html',
})
export class Jogos {
  jogos: Jogo[] = [];
  busca: string = '';
  categoria: string = '';
  erro: string = '';
  categorias: string[] = ['RPG', 'Ação', 'Aventura', 'FPS', 'Souls Like'];

  constructor(private jogoService: JogoService, private route: ActivatedRoute) {
    // se veio uma categoria pelo link da home, já usa ela
    this.categoria = this.route.snapshot.queryParamMap.get('categoria') || '';
    this.filtrar();
  }

  filtrar() {
    let lista = this.jogoService.buscarPorNome(this.busca);

    if (this.categoria != '') {
      lista = lista.filter((j) => j.categoria == this.categoria);
    }

    this.jogos = lista;

    if (this.jogos.length == 0) {
      this.erro = 'Nenhum jogo encontrado.';
    } else {
      this.erro = '';
    }
  }
}
