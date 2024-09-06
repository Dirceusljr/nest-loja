import { IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";
import { EmailEhUnico } from "../validator/email-eh-unico.validator";

export class CriaUsuarioDTO {
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    nome: string;

    @IsEmail(undefined, { message: 'E-mail inválido.' })
    @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
    email: string;

    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    senha: string;
}