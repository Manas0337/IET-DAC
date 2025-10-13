// DataFetcher.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Fetched Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
