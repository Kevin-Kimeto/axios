import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setItems(res.data);
            console.log(res.data);
        });
    }, []);

    const result = items.map((id, title) => {
        return (
            id= 'id',
            title='title'
        );
    });

  return (
    <div>
        <h1>{result.title}</h1>
    </div>
  );
}

export default App;