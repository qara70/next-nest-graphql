import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      // @nestjs/graphql v10でApolloかMercuriusを選択できるような変更が入っている
      driver: ApolloDriver,
      // schemaファイルパス指定
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // 生成されるschemaを自動でソートするオプションの有効化
      sortSchema: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
