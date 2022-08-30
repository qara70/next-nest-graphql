import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      // schemaファイルパスしてい
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      // 生成されるschemaを自動でソートするオプションの有効化
      sortSchema: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
