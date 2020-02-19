import React, { useState, useEffect } from 'react'
import useList from './hooks/useList'

function App() {

  const { list, setList } = useList()

  return (
    <div>
      <h1>list</h1>
      <ol>
        {list ? list.map(item =>
          <li key={item.id}>{item.name}</li>
        ) : '加载中'}
      </ol>
    </div>
  );
}

export default App