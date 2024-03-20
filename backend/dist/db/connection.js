import { connect, disconnect } from 'mongoose';
const ConnectToDatabase = async () => {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error('Could not connect to database');
    }
};
const DisconnectToDatabase = async () => {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to disconnect from MongoDB");
    }
};
export { ConnectToDatabase, DisconnectToDatabase };
//# sourceMappingURL=connection.js.map