import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blogs } from './entities';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Blogs)
    private readonly blogsRepository: Repository<Blogs>,
  ) {}

  async createPost(blogData: CreateBlogDTO): Promise<string> {
    const blogInstance = this.blogsRepository.create(blogData);
    await this.blogsRepository.save(blogInstance);
    return 'Post created successfully';
  }
  async getPost(id: string): Promise<Blogs> {
    const blog = await this.blogsRepository.findOne({
      where: {
        id,
      },
    });
    if (!blog) {
      throw new NotFoundException('Blog post not found for the provided ID');
    }
    return blog;
  }
}
