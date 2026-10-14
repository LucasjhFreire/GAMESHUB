import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JogoService } from '../../services/jogo.service';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  total: number;
  gratuitos: number;

  constructor(private jogoService: JogoService) {
    this.total = this.jogoService.totalJogos();
    this.gratuitos = this.jogoService.totalJogosGratuitos();
  }
}
