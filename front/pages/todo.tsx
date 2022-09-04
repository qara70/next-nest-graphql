import type { NextPage } from "next";
import { useQuery, gql } from "@apollo/client";

const TODOS = gql`
  query {
    findAll {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;

type TODO = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

const Todos: NextPage = () => {
  const { loading, error, data } = useQuery(TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  return data.findAll.map(
    ({ id, title, description, createdAt, updatedAt }: TODO) => (
      <div key={id}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{createdAt.getUTCDate()}</p>
        <p>{updatedAt.getUTCDate()}</p>
      </div>
    )
  );
};

export default Todos;
