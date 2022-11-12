import Firebird from 'node-firebird';

interface IOptions {
    host: string,
    port: number,
    database: string,
    user: string,
    password: string,
    lowercase_keys: boolean,
    role: string,
    pageSize: number,
    retryConnectionInterval: number,
    blobAsText: boolean,
}

export const options: IOptions = {
    host: 'localhost',
    port: 3050,
    database: 'C:/Program Files/Firebird/Firebird_2_5/DUCHODAK.FDB',
    user: 'vofrk',
    password: 'masterkey',
    lowercase_keys: false,
    role: 'RDB$ADMIN',
    pageSize: 4096,
    retryConnectionInterval: 1000,
    blobAsText: false,
}

/*
Firebird.attach(options, (err, db) => {
    if (err)
        throw err;

    db.query('SELECT * FROM mydata', [], (err, result) => {
        for (const row of result) {
            for (const key in row)
                if (Buffer.isBuffer(row[key]))
                    row[key] = row[key].toString('binary')
        }
        console.log(result);
        db.detach();
    });

});

*/