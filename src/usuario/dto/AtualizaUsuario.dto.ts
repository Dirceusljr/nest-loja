import { IsEmail, IsNotEmpty, IsOptional, Min, MinLength } from "class-validator";
import { EmailEhUnico } from "../validator/email-eh-unico.validator";

export class AtualizaUsuarioDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: 'E-mail inválido.' })
    @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    @IsOptional()
    senha: string;
}