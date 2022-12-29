import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import { useAllUsersQuery } from '../../generated/react-hooks';

const Home: React.FC = props => {
  const [list, setList] = useState<Array<{ id: string; label: string }>>([]);

  useEffect(() => {
    setList([
      {
        id: '1',
        label: 'item-1',
      },
      {
        id: '2',
        label: 'item-2',
      },
    ]);
  }, []);

  const { loading, error } = useAllUsersQuery({
    onCompleted(data) {
      setList(
        data.allUsers?.map(user => ({
          id: user.id.toString(),
          label: user.name || '',
        }))
      );
    },
  });

  function render() {
    if (loading) {
      return <h1>loading...</h1>;
    }

    if (error) {
      return <h1>error: {error.message}</h1>;
    }

    return <List list={list} />;
  }

  return <main>{render()}</main>;
};

export default Home;
