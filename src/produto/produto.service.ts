import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoEntity: Repository<ProdutoEntity>,
  ) {}

  async criaProduto(produtoEntity: ProdutoEntity) {
    await this.produtoEntity.save(produtoEntity);
  }

  async listaProdutos() {
    const produtosSalvos = await this.produtoEntity.find();
    return produtosSalvos;
  }

  async atualizaProduto(
    id: string,
    produtoEntity: Partial<AtualizaProdutoDTO>,
  ) {
    const produto = await this.produtoEntity.findOneBy({ id });
    Object.assign(produto, produtoEntity);
    await this.produtoEntity.save(produto);
  }

  async deletaProduto(id: string) {
    await this.produtoEntity.delete(id);
  }
}
