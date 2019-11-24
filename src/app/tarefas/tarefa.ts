import { User } from '../_models';

export class Tarefa {
    id: number;
    titulo: string;
    done: boolean;
    createdAt: string;
    userId?: number;
    User?: User;
    constructor (id = null, titulo = '', done = false, userId = null) {
        let createdAt:any = new Date();
        this.id = id;
        this.titulo = titulo;
        this.done = done;
        this.createdAt = createdAt.getUTCDate() + '/' + (createdAt.getUTCMonth() + 1) + '/' + createdAt.getUTCFullYear() ;
        this.userId = userId;
    }
}
