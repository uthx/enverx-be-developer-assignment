import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBlogDTO } from './dto';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async createPost(@Body() body: CreateBlogDTO): Promise<string> {
    return await this.appService.createPost(body)
  }

}
