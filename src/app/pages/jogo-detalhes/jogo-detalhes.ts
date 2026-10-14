import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Jogo } from '../../models/jogo.model';
import { JogoService } from '../../services/jogo.service';

@Component({
  imports: [RouterLink],
  selector: 'app-jogo-detalhes',
  styleUrl: './jogo-detalhes.css',
  templateUrl: './jogo-detalhes.html',
})
export class JogoDetalhes {
  jogo: Jogo | undefined;

  constructor(private route: ActivatedRoute, private jogoService: JogoService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jogo = this.jogoService.buscarPorId(id);
  }
}
