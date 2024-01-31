import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blogs } from './entities';
import { SortOrder, FilterDTO, CreateBlogDTO, UpdateBlogDTO } from './dto';
import { SuccessMessages, ErrorMessages } from './common';
import { plainToClass } from 'class-transformer';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Blogs)
    private readonly blogsRepository: Repository<Blogs>,
  ) {}

  async createPost(blogData: CreateBlogDTO): Promise<string> {
    const validatedData = plainToClass(CreateBlogDTO, blogData, {
      excludeExtraneousValues: true,
    });
    const blogInstance = this.blogsRepository.create(validatedData);
    await this.blogsRepository.save(blogInstance);
    return SuccessMessages.CreatePost;
  }
  async getPost(id: string): Promise<Blogs> {
    const blog = await this.blogsRepository.findOne({
      where: {
        id,
      },
    });
    if (!blog) {
      throw new NotFoundException(ErrorMessages.GetBlogNotFound);
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
      throw new NotFoundException(ErrorMessages.GetBlogsNotFound);
    }
    return blogs;
  }
  async updatePost(id: string, postUpdateData: UpdateBlogDTO): Promise<string> {
    const validatedData = plainToClass(UpdateBlogDTO, postUpdateData, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });
    if (!Object.keys(postUpdateData)?.length) {
      throw new BadRequestException(ErrorMessages.UpdatePostInvalidData);
    }
    const doesBlogExists = await this.blogsRepository.exist({ where: { id } });
    if (doesBlogExists) {
      await this.blogsRepository.update(id, validatedData);
      return SuccessMessages.UpdatePost;
    }
    throw new NotFoundException(ErrorMessages.UpdatePostNotExist);
  }
  async deletePost(id: string): Promise<string> {
    const doesBlogExists = await this.blogsRepository.exist({ where: { id } });
    if (doesBlogExists) {
      await this.blogsRepository.delete(id);
      return SuccessMessages.DeletePost;
    }
    throw new NotFoundException(ErrorMessages.DeleteBlogNotExist);
  }
}
