import { styled } from 'linaria/react';
import { css } from 'linaria';

export const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItemWrapper = styled.li`
  padding: 0;
  margin: 0;
  
  & + li {
    margin-top: 4px;
  }
  
  &.list-item {
    cursor: pointer;
  }
  
  &:hover {
    background: #00FFFF50;
  }
`

export const ListItemActiveStyle = css`
  background: cyan;
  
  &:hover {
    background: cyan;
  }
`
