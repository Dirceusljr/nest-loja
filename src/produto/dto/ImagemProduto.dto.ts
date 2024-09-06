import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class ImagemProdutoDTO {
    @IsUrl({}, { message: 'A URL da imagem é inválida.' })
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
    descricao: string;
}