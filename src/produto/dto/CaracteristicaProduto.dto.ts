import { IsNotEmpty, IsString } from "class-validator";

export class CaracteristicaProdutoDTO {
    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    nome: string;

    @IsString()
    @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
    descricao: string;
}