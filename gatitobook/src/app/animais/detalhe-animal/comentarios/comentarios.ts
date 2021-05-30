export interface Comentario {
  date: Date;
  name: string;
  text:string;
  userName: string;
}

export type Comentarios = Array<Comentario>;
