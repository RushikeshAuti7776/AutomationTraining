import { Client } from 'pg';
import cofig from '../../config/config.json' with {type: 'json'};

export class DBCommons {

    async getData(query: string): Promise<any> {

        //create a new client instance configuration to connect with database
        const dbconstant = new Client({
            host: cofig.db.host,
            port: cofig.db.port,
            user: cofig.db.username,
            password: cofig.db.password,
            database: cofig.db.database
        })

        //connect to database
        await dbconstant.connect();
        //execute the query and store the result in a variable
        const data = await dbconstant.query(query);

        //close the database connection
        await dbconstant.end();

        //return the data
        return data.rows;

    }
}

let db = new DBCommons();
const query = 'SELECT * FROM users';
const data = await db.getData(query);