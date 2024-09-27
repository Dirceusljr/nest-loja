import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoEntity: Repository<UsuarioEntity>,
  ) {}

  async criaProduto(produtoEntity: ProdutoEntity) {
    await this.produtoEntity.save(produtoEntity);
  }

  async listaProdutos() {
    const produtosSalvos = await this.produtoEntity.find();
    return produtosSalvos;
  }

  async atualizaProduto(id: string, produtoEntity: Partial<ProdutoEntity>) {
    await this.produtoEntity.update(id, produtoEntity);
  }

  async deletaProduto(id: string) {
    await this.produtoEntity.delete(id);
  }
}
