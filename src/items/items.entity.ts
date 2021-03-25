import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('test_amo')
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: string;

  @Column({ type: 'json' })
  leads: string;

  @Column({ type: 'json' })
  pipelines: string;

  @Column({ type: 'json' })
  users: string;

  @Column({ type: 'json' })
  contacts: string;
}