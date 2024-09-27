import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { v4 as uuid } from 'uuid';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';
import { ProdutoService } from './produto.service';

@Controller('/produtos')
export class ProdutoController {
  constructor(
    private produtoRepository: ProdutoRepository,
    private produtoService: ProdutoService,
  ) {}

  @Post()
  async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    const produto = new ProdutoEntity();

    produto.id = await uuid();
    produto.usuarioId = dadosDoProduto.usuarioId;
    produto.nome = dadosDoProduto.nome;
    produto.valor = dadosDoProduto.valor;
    produto.quantidade = dadosDoProduto.quantidade;
    produto.descricao = dadosDoProduto.descricao;
    produto.categoria = dadosDoProduto.categoria;
    produto.caracteristicas = dadosDoProduto.caracteristicas;
    produto.imagens = dadosDoProduto.imagens;

    const produtoCadastrado = await this.produtoService.criaProduto(produto);
    return {
      produto: produtoCadastrado,
      message: 'Produto criado com sucesso',
    };
  }

  @Get()
  async listaProdutos() {
    return this.produtoService.listaProdutos();
  }

  @Put('/:id')
  async atualizaProduto(
    @Param('id') id: string,
    @Body() novosDados: AtualizaProdutoDTO,
  ) {
    const produtoAtualizado = await this.produtoService.atualizaProduto(
      id,
      novosDados,
    );

    return {
      produto: produtoAtualizado,
      message: 'Produto atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeProduto(@Param('id') id: string) {
    const produtoRemovido = await this.produtoService.deletaProduto(id);

    return {
      produto: produtoRemovido,
      message: 'Produto removido com sucesso',
    };
  }
}
