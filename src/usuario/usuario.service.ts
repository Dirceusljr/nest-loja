import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioEntity: Repository<UsuarioEntity>
    ) { }

    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioEntity.find();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(usuario.id, usuario.nome)
        )

        return usuariosLista;
    }
}