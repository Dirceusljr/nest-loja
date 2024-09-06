import { IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";

export class CriaUsuarioDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    nome: string;

    @IsEmail(undefined, { message: 'E-mail inválido.' })
    email: string;

    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    senha: string;
}