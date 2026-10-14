import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo.model';

@Injectable({ providedIn: 'root' })
export class JogoService {
  private jogos: Jogo[] = [
    // Souls Like
    { id: 1, nome: 'Elden Ring', descricao: 'RPG de ação em um mundo aberto sombrio, dos criadores de Dark Souls.', categoria: 'Souls Like', preco: 249.9, avaliacao: 4.9, imagem: 'imagens/elden-ring.jpg', disponivel: true },
    { id: 2, nome: 'Sekiro: Shadows Die Twice', descricao: 'Ação com samurai e combate de espadas muito difícil.', categoria: 'Souls Like', preco: 199.9, avaliacao: 4.8, imagem: 'imagens/sekiro.jpg', disponivel: true },
    { id: 3, nome: 'Dark Souls 1', descricao: 'O clássico que deu origem ao estilo Souls Like.', categoria: 'Souls Like', preco: 99.9, avaliacao: 4.7, imagem: 'imagens/dark-souls-1.jpg', disponivel: true },
    { id: 4, nome: 'Dark Souls 2', descricao: 'Continuação com novos reinos e muitos chefes.', categoria: 'Souls Like', preco: 99.9, avaliacao: 4.3, imagem: 'imagens/dark-souls-2.jpg', disponivel: true },
    { id: 5, nome: 'Dark Souls 3', descricao: 'O último capítulo da trilogia, com combate mais rápido.', categoria: 'Souls Like', preco: 119.9, avaliacao: 4.7, imagem: 'imagens/dark-souls-3.jpg', disponivel: true },
    { id: 6, nome: 'Demon Souls', descricao: 'O jogo que começou tudo, em versão remake para PS5.', categoria: 'Souls Like', preco: 349.9, avaliacao: 4.6, imagem: 'imagens/demon-souls.jpg', disponivel: false },

    // FPS
    { id: 7, nome: 'Counter-Strike 2', descricao: 'FPS competitivo online, terroristas contra antiterroristas.', categoria: 'FPS', preco: 0, avaliacao: 4.5, imagem: 'imagens/cs2.jpg', disponivel: true },
    { id: 8, nome: 'Call of Duty: Black Ops 6', descricao: 'FPS de guerra com campanha e multiplayer.', categoria: 'FPS', preco: 299.9, avaliacao: 4.2, imagem: 'imagens/cod-black-ops-6.jpg', disponivel: true },
    { id: 9, nome: 'Call of Duty: Warzone', descricao: 'Battle royale gratuito da série Call of Duty.', categoria: 'FPS', preco: 0, avaliacao: 4.0, imagem: 'imagens/cod-warzone.jpg', disponivel: true },
    { id: 10, nome: 'Apex Legends', descricao: 'Battle royale com lendas e habilidades especiais.', categoria: 'FPS', preco: 0, avaliacao: 4.4, imagem: 'imagens/apex-legends.jpg', disponivel: true },
    { id: 11, nome: 'DOOM Eternal', descricao: 'FPS rápido e violento contra demônios.', categoria: 'FPS', preco: 129.9, avaliacao: 4.7, imagem: 'imagens/doom-eternal.jpg', disponivel: true },

    // RPG
    { id: 12, nome: 'The Witcher 3', descricao: 'Aventura de Geralt de Rívia em um enorme mundo aberto.', categoria: 'RPG', preco: 79.9, avaliacao: 4.9, imagem: 'imagens/witcher-3.jpg', disponivel: true },
    { id: 13, nome: 'Skyrim', descricao: 'RPG de fantasia com dragões e liberdade total.', categoria: 'RPG', preco: 89.9, avaliacao: 4.8, imagem: 'imagens/skyrim.jpg', disponivel: true },
    { id: 14, nome: 'Baldur\'s Gate 3', descricao: 'RPG de turnos com muitas escolhas e história profunda.', categoria: 'RPG', preco: 199.9, avaliacao: 4.9, imagem: 'imagens/baldurs-gate-3.jpg', disponivel: true },
    { id: 15, nome: 'Cyberpunk 2077', descricao: 'RPG em uma cidade futurista cheia de tecnologia.', categoria: 'RPG', preco: 199.9, avaliacao: 4.3, imagem: 'imagens/cyberpunk-2077.jpg', disponivel: true },
    { id: 16, nome: 'Path of Exile', descricao: 'RPG de ação gratuito com muitos itens e habilidades.', categoria: 'RPG', preco: 0, avaliacao: 4.4, imagem: 'imagens/path-of-exile.jpg', disponivel: true },

    // Ação
    { id: 17, nome: 'God of War', descricao: 'Kratos e seu filho em uma jornada pela mitologia nórdica.', categoria: 'Ação', preco: 149.9, avaliacao: 4.9, imagem: 'imagens/god-of-war.jpg', disponivel: true },
    { id: 18, nome: 'Devil May Cry 5', descricao: 'Ação estilosa com combos e muitos demônios.', categoria: 'Ação', preco: 99.9, avaliacao: 4.6, imagem: 'imagens/devil-may-cry-5.jpg', disponivel: true },
    { id: 19, nome: 'Grand Theft Auto V', descricao: 'Ação em mundo aberto na cidade de Los Santos.', categoria: 'Ação', preco: 89.9, avaliacao: 4.7, imagem: 'imagens/gta-5.jpg', disponivel: true },
    { id: 20, nome: 'Marvel\'s Spider-Man', descricao: 'Aventura de herói balançando pelos prédios de Nova York.', categoria: 'Ação', preco: 199.9, avaliacao: 4.7, imagem: 'imagens/spider-man.jpg', disponivel: true },

    // Aventura
    { id: 21, nome: 'Zelda: Breath of the Wild', descricao: 'Aventura em um grande mundo aberto cheio de segredos.', categoria: 'Aventura', preco: 299.9, avaliacao: 4.9, imagem: 'imagens/zelda-botw.jpg', disponivel: false },
    { id: 22, nome: 'Tomb Raider', descricao: 'Lara Croft em uma aventura de exploração e sobrevivência.', categoria: 'Aventura', preco: 49.9, avaliacao: 4.3, imagem: 'imagens/tomb-raider.jpg', disponivel: true },
    { id: 23, nome: 'Red Dead Redemption 2', descricao: 'Aventura no velho oeste com uma história emocionante.', categoria: 'Aventura', preco: 249.9, avaliacao: 4.9, imagem: 'imagens/red-dead-2.jpg', disponivel: true },
    { id: 24, nome: 'It Takes Two', descricao: 'Aventura cooperativa para dois jogadores.', categoria: 'Aventura', preco: 129.9, avaliacao: 4.8, imagem: 'imagens/it-takes-two.jpg', disponivel: true },
    { id: 25, nome: 'Subnautica', descricao: 'Sobrevivência e exploração no fundo de um oceano alienígena.', categoria: 'Aventura', preco: 59.9, avaliacao: 4.6, imagem: 'imagens/subnautica.jpg', disponivel: true },
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
