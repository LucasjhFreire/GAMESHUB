import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JogoService } from '../../services/jogo.service';

@Component({
  imports: [FormsModule],
  selector: 'app-cadastrar-jogo',
  styleUrl: './cadastrar-jogo.css',
  templateUrl: './cadastrar-jogo.html',
})
export class CadastrarJogo {
  categorias: string[] = ['Souls Like', 'FPS', 'RPG', 'Ação', 'Aventura'];
  nome: string = '';
  descricao: string = '';
  categoria: string = '';
  preco: number = 0;
  erroNome: string = '';
  erroPreco: string = '';
  sucesso: string = '';

  constructor(private jogoService: JogoService) {}

  cadastrar() {
    this.erroNome = '';
    this.erroPreco = '';
    this.sucesso = '';

    if (this.nome.trim() == '') {
      this.erroNome = 'O nome é obrigatório.';
    }
    if (this.preco < 0) {
      this.erroPreco = 'O preço não pode ser negativo.';
    }
    if (this.erroNome != '' || this.erroPreco != '') {
      return;
    }

    this.jogoService.adicionar({
      id: this.jogoService.totalJogos() + 1,
      nome: this.nome,
      descricao: this.descricao,
      categoria: this.categoria,
      preco: this.preco,
      avaliacao: 0,
      imagem: '',
      disponivel: true,
    });

    this.sucesso = 'Jogo cadastrado com sucesso!';
    this.nome = '';
    this.descricao = '';
    this.categoria = '';
    this.preco = 0;
  }
}
