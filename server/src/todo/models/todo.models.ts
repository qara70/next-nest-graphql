import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum TodoStatus {
  NEW,
  IN_PROGRESS,
  COMPLETE,
}

// enumを使用する際は registerEnumType でenumを登録する
// https://docs.nestjs.com/graphql/unions-and-enums#enums
registerEnumType(TodoStatus, {
  name: 'TodoStatus',
});

// ObjectTypeデコレータを使用することで、定義したmodelを元にschemaが自動生成
@ObjectType()
export class Todo {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field((type) => TodoStatus)
  status: TodoStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
