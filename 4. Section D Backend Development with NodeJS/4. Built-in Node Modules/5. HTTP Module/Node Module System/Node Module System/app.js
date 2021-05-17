const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url == '/'){
        response.write(`Hello World`);
        response.end();
    }

    if(request.url == '/student'){
        response.write(JSON.stringify([
            {name :  "Karim"},
            {name :  "Rahim" }
        ]))
        response.end();
    }
});

server.listen(3000); //port

console.log("Listening on port 3000...");