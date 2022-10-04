import { app } from "./utils/app";
import { port } from "./utils/environment";

app.listen(port, () => console.log(`server running at port ${port}`));