import React, { useState } from 'react';
import {
  ListWrapper,
  ListItemWrapper,
  ListItemActiveStyle,
} from '../styles/components/List.style';
import { cx } from 'linaria';

const List: React.FC<{
  list: Array<{ id: string; label: string; }>
}> = ({ list }) => {
  const [activeId, setActiveId] = useState('');

  return (
    <ListWrapper>
      {list.map(item => (
        <ListItemWrapper
          key={item.id}
          className={cx(
            'list-item',
            activeId === item.id && '__active',
            activeId === item.id && ListItemActiveStyle,
          )}
          onClick={() => setActiveId(item.id)}
        >
          {item.label}
        </ListItemWrapper>
      ))}
    </ListWrapper>
  );
};

export default List;
