import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import EnvConfiguration from './config/env.configuration';
import EnvValidation from './config/env.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './orm.config';
import { Blogs } from './entities/blogs.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
      validate: EnvValidation,
    }),
    TypeOrmModule.forFeature([Blogs]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
