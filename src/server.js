import http from 'http';
import app from './app.js';








const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

async function startServer(){
    server.listen(PORT, ()=> {
        console.log("Server Running on PORT: ", PORT);
        
    })
}

//Startup
startServer();