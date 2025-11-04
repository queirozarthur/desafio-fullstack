import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'funcionarios' })
export class Funcionario {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column() 
  nome: string;

  @Column() 
  cidade: string;

  @Column() 
  cargo: string;
}