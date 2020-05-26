import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((it, i) => <li key={i}>{it}</li>)
    }
  </ul>
);

export default List;