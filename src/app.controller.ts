import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBlogDTO } from './dto';
import { Blogs } from './entities';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async createPost(@Body() body: CreateBlogDTO): Promise<string> {
    return await this.appService.createPost(body)
  }
  @Get(':id')
  async getPost(@Param() id: string): Promise<Blogs> {
    return await this.appService.getPost(id);
  }

}
