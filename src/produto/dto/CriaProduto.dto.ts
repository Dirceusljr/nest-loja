import { ArrayMinSize, IsArray, IsCurrency, IsDecimal, IsNotEmpty, IsNumber, isPositive, IsPositive, IsString, IsUUID, Max, MaxLength, min, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO {
    @IsUUID(undefined, { message: 'O id deve ser um UUID válido.' })
    usuarioId: string;

    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    nome: string;

    @IsPositive({ message: 'O valor deve ser maior que zero.' })
    @IsDecimal({ decimal_digits: '2'}, { message: 'O valor deve ser um número decimal com 2 casas.' })
    valor: number;

    @IsNumber()
    @Min(0, { message: 'A quantidade disponível deve ser maior ou igual a zero.' })
    quantidadeDisponivel: number;

    @IsString()
    @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
    @MaxLength(1000, { message: 'A descrição deve ter no máximo 1000 caracteres.' })
    descricao: string;


    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3, { message: 'Deve haver no mínimo 3 características.' })
    @Type(()=> CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1, { message: 'Deve haver no mínimo 1 imagem.' })
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty({ message: 'A categoria não pode ser vazia.' })
    categoria: string;
}