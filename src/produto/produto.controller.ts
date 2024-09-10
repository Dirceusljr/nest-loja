import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { ProdutoEntity } from "./produto.entity";
import { v4 as uuid } from 'uuid'
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";


@Controller('/produtos')
export class ProdutoController {
    constructor(private produtoRepository: ProdutoRepository) { }

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
        const produto = new ProdutoEntity()

        produto.id = await uuid();
        produto.nome = dadosDoProduto.nome;
        produto.valor = dadosDoProduto.valor;
        produto.quantidadeDisponivel = dadosDoProduto.quantidadeDisponivel;
        produto.descricao = dadosDoProduto.descricao;
        produto.caracteristicas = dadosDoProduto.caracteristicas;
        produto.imagens = dadosDoProduto.imagens;
        produto.categoria = dadosDoProduto.categoria;
        

        const produtoCadastrado = await this.produtoRepository.salvar(produto)
        return {
            produto: produtoCadastrado,
            message: 'Produto criado com sucesso'
        }
    }

    @Get()
    async listaProdutos() {
        return this.produtoRepository.listar()
    }

    @Put('/:id')
    async atualizaProduto(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO) {
        const produtoAtualizado = await this.produtoRepository.atualiza(id, novosDados);

        return {
            produto: produtoAtualizado,
            message: 'Produto atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async removeProduto(@Param('id') id: string) {
        const produtoRemovido = await this.produtoRepository.remove(id);

        return {
            produto: produtoRemovido,
            message: 'Produto removido com sucesso'
        }
    }
}