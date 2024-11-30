
import mongoose from "mongoose";

const DbConnect = () => {

    console.log("[ ] Connecting to DB");

    try {
        const MongoUri = process.env.MongoURL || 'mongodb://localhost:27017/Dev_DB';

        mongoose.connect(MongoUri);
        const db = mongoose.connection;

        db.on('error', () => {
            console.log("[-] Error Connecting Db\ntry restarting Server")
        });
        db.once('open', () => {
            console.log(`[+] Connected to "${db.name}" running http://${db.host}/${db.port}`)
        });
    } catch (error) {
        console.log(error);
        console.log('[-] check if the DB is Up');
    }

}

export default DbConnect;