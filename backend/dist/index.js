import app from "./app.js";
import { ConnectToDatabase } from "./db/connection.js";
// connection and listeners
const port = process.env.PORT || 5000;
ConnectToDatabase()
    .then(() => app.listen(port, () => console.log("server is running and connected to database"))).catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map