import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('data-amo')
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: string;

  @Column()
  leads: string;

  @Column()
  pipelines: string;

  @Column()
  users: string;

  @Column()
  contacts: string;
}