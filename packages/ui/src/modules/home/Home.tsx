import React, { useEffect, useState } from 'react';
import List from '../../components/List';

const Home: React.FC = props => {
  const [list, setList] = useState<Array<{ id: string; label: string; }>>([]);

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

  return (
    <main>
      <List list={list} />
    </main>
  );
};

export default Home;
