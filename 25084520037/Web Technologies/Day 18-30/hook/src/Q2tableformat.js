import React, { useState } from 'react';

function TableFormat() {
  const [posts, setPosts] = useState([]);

  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error loading data:', error));
  };

  return (
    <div>
      <h2>Posts Table</h2>
      <button onClick={loadData}>Load Data</button>
      {posts.length > 0 && (
        <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={cellStyle}>ID</th>
              <th style={cellStyle}>Title</th>
              <th style={cellStyle}>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td style={cellStyle}>{post.id}</td>
                <td style={cellStyle}>{post.title}</td>
                <td style={cellStyle}>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const cellStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#fff'
};

export default TableFormat;
