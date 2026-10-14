import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo.model';

@Injectable({ providedIn: 'root' })
export class JogoService {
  private jogos: Jogo[] = [
    { id: 1, nome: 'Elden Ring', descricao: 'RPG de mundo aberto em um mundo sombrio.', categoria: 'RPG', preco: 249.9, avaliacao: 4.9, imagem: 'elden-ring.jpg', disponivel: true },
    { id: 2, nome: 'Dark Souls 3', descricao: 'Jogo de ação difícil no estilo Souls Like.', categoria: 'Souls Like', preco: 119.9, avaliacao: 4.7, imagem: 'dark-souls-3.jpg', disponivel: true },
    { id: 3, nome: 'Sekiro', descricao: 'Ação com samurai e combate de espadas.', categoria: 'Ação', preco: 199.9, avaliacao: 4.8, imagem: 'sekiro.jpg', disponivel: true },
    { id: 4, nome: 'Counter-Strike 2', descricao: 'FPS competitivo online.', categoria: 'FPS', preco: 0, avaliacao: 4.5, imagem: 'cs2.jpg', disponivel: true },
    { id: 5, nome: 'Valorant', descricao: 'FPS tático com agentes e habilidades.', categoria: 'FPS', preco: 0, avaliacao: 4.3, imagem: 'valorant.jpg', disponivel: true },
    { id: 6, nome: 'Zelda Breath of the Wild', descricao: 'Aventura em um grande mundo aberto.', categoria: 'Aventura', preco: 299.9, avaliacao: 4.9, imagem: 'zelda.jpg', disponivel: false },
    { id: 7, nome: 'Genshin Impact', descricao: 'RPG de aventura gratuito com personagens.', categoria: 'RPG', preco: 0, avaliacao: 4.4, imagem: 'genshin.jpg', disponivel: true },
    { id: 8, nome: 'Tomb Raider', descricao: 'Aventura com exploração e quebra-cabeças.', categoria: 'Aventura', preco: 89.9, avaliacao: 4.2, imagem: 'tomb-raider.jpg', disponivel: true },
  ];

  listar(): Jogo[] {
    return this.jogos;
  }

  buscarPorId(id: number): Jogo | undefined {
    return this.jogos.find((j) => j.id === id);
  }

  adicionar(jogo: Jogo) {
    this.jogos.push(jogo);
  }

  filtrarPorCategoria(categoria: string): Jogo[] {
    return this.jogos.filter((j) => j.categoria === categoria);
  }

  buscarPorNome(nome: string): Jogo[] {
    return this.jogos.filter((j) => j.nome.toLowerCase().includes(nome.toLowerCase()));
  }

  totalJogos(): number {
    return this.jogos.length;
  }

  totalJogosGratuitos(): number {
    return this.jogos.filter((j) => j.preco === 0).length;
  }
}

