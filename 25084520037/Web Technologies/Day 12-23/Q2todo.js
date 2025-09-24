
const http = require('http');
const url = require('url');

let todos = [
    { id: 1, task: 'Task One' },
    { id: 2, task: 'Task Two' },
    { id: 3, task: 'Task Three' }
];

const server = http.createServer((request, response) => {
    const { method, url: reqUrl } = request;
    const parsedUrl = new URL(reqUrl, `http://${request.headers.host}`);
    const pathname = parsedUrl.pathname;

   
    if (method === 'GET' && pathname === '/todos') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(todos));
    }
    

    else if (method === 'GET' && pathname.startsWith('/todos/')) {
        const id = parseInt(pathname.split('/')[2]);
        const todo = todos.find(item => item.id === id);
        if (todo) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(`<h1>Task: ${todo.task}</h1>`);
        } else {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.end('<h1>Todo Not Found</h1>');
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000, () => console.log("Server started at http://localhost:3000"));
