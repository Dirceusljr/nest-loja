import { IsNotEmpty, IsString } from 'class-validator';
import { ProdutoEntity } from '../produto.entity';

export class CaracteristicaProdutoDTO {
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
  descricao: string;

  produto: ProdutoEntity;
}
