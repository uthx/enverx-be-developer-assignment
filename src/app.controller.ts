import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  CreateBlogDTO,
  DeletePostDTO,
  GetPostDTO,
  FilterDTO,
  UpdateBlogDTO,
  UpdateBlogIdDTO,
} from './dto';
import { Blogs } from './entities';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async createPost(@Body() body: CreateBlogDTO): Promise<string> {
    return await this.appService.createPost(body);
  }
  @Get(':id')
  async getPost(@Param() { id }: GetPostDTO): Promise<Blogs> {
    return await this.appService.getPost(id);
  }
  @Get()
  async getPosts(@Query() query: FilterDTO): Promise<Blogs[] | any> {
    return await this.appService.getPosts(query);
  }
  @Delete(':id')
  async deletePost(@Param() { id }: DeletePostDTO): Promise<string> {
    return await this.appService.deletePost(id);
  }
  @Put(':id')
  async updatePost(
    @Param() { id }: UpdateBlogIdDTO,
    @Body() body: UpdateBlogDTO,
  ): Promise<string> {
    return await this.appService.updatePost(id, body);
  }
}
