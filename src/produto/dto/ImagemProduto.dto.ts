import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class ImagemProdutoDTO {
  id: string;

  @IsUrl({}, { message: 'A URL da imagem é inválida.' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
  descricao: string;

  produto: ProdutoEntity;
}
