import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({ type: 'set', enum: Categories })
  category: string[];

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updateAt: Date;
}
