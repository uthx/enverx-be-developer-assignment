import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blogs } from './entities';
import { SortOrder, FilterDTO, CreateBlogDTO } from './dto';
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
  async getPosts(query: FilterDTO): Promise<Blogs[]> {
    const { category, sortOrder } = query;
    const queryBuilder = this.blogsRepository.createQueryBuilder('blogs');

    queryBuilder.where(`FIND_IN_SET('${category}', blogs.category) > 0`);
    if (sortOrder === SortOrder.ASC) {
      queryBuilder.orderBy('blogs.created_at', 'ASC');
    } else {
      queryBuilder.orderBy('blogs.created_at', 'DESC');
    }
    const blogs = await queryBuilder.getMany();
    if (!blogs?.length) {
      throw new NotFoundException('Blogs not found with the provided category');
    }
    return blogs;
  }
}
