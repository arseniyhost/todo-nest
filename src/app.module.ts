import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://todo:12345@cluster0.nhqdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), TodoModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
