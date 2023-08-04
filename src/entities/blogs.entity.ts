import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
export enum Categories {
  TECHNOLOGY = 'technology',
  POLITICS = 'politics',
  HEALTH = 'health',
  BUSINESS = 'business',
  EDUCATION = 'education',
}
@Entity({ name: 'blogs' })
export class Blogs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column({ type: 'set', enum: Categories })
  category: string[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;
}
