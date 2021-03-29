import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('leads')
export class Leads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  external_Id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'json' })
  status: Array<string>;

  @Column({ type: 'text' })
  responsible_user: string;

  @Column({ type: 'integer' })
  created_at: number;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'json', nullable: true })
  tags: Array<string>;

  @ManyToMany(type => Contacts, contact => contact.id, { cascade: true })
  @JoinTable({ name: 'leads_contacts' })
  contact: Contacts[];
}

@Entity('contacts')
export class Contacts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  external_Id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'text' })
  email: string;
}