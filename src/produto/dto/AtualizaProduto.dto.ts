import { ArrayMinSize, IsArray, IsCurrency, IsDecimal, IsNotEmpty, IsNumber, IsOptional, isPositive, IsPositive, IsString, IsUUID, Max, MaxLength, min, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";
import { Type } from "class-transformer";

export class AtualizaProdutoDTO {
    @IsString()
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    @IsOptional()
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    valor: number;

    @IsNumber()
    @Min(0, { message: 'A quantidade disponível deve ser maior ou igual a zero.' })
    @IsOptional()
    quantidade: number;

    @IsString()
    @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
    @MaxLength(1000, { message: 'A descrição deve ter no máximo 1000 caracteres.' })
    @IsOptional()
    descricao: string;


    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3, { message: 'Deve haver no mínimo 3 características.' })
    @IsOptional()
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @IsOptional()
    @ArrayMinSize(1, { message: 'Deve haver no mínimo 1 imagem.' })
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsOptional()
    @IsNotEmpty({ message: 'A categoria não pode ser vazia.' })
    categoria: string;
}