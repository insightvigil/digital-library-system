import {Pool} from 'pg';

//We create the pool
export const pool = new Pool({
    user: 'postgres',
    password: 'toor',
    host: '192.168.0.159',
    port: 5432, 
    database: 'biblioteca',
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})



