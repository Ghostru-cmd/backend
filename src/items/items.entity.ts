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

  @ManyToMany(type => Contacts)
  @JoinTable({ name: 'leads_contacts' })
  contact: Contacts[];
  // @ManyToMany(() => Contacts, contact => contact.leads)
  // @JoinTable()
  // contacts: Contacts[];
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

  // @ManyToMany(() => Leads, lead => lead.contacts)
  // @JoinTable()
  // leads: Leads[];
}

// @Entity('leads_contacts')
// export class LeadsContacts {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ type: 'number' })
//   external_Id: number;

//   @Column({ type: 'string' })
//   name: string;

//   @Column({ type: 'string' })
//   phone: string

//   @Column({ type: 'string' })
//   email: string
// }


// @Entity('test_amo')
// export class ItemEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @CreateDateColumn()
//   createDate: string;

//   @Column({ type: 'json' })
//   leads: string;

//   @Column({ type: 'json' })
//   pipelines: string;

//   @Column({ type: 'json' })
//   users: string;

//   @Column({ type: 'json' })
//   contacts: string;
// }