import {Pool} from 'pg';

//We create the pool
export const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT, 
    database: process.env.PGDATABASE,
    max: process.env.PGPOOL_MAX,
    idleTimeoutMillis: process.env.PGIDLE_TIMEOUT,
    connectionTimeoutMillis: process.env.PGCONNECTION_TIMEOUT,
})



