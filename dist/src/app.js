import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import status from "http-status";
import router from "./app/routes";
// import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app = express();
//parser
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.get("/", (req, res) => {
    res.send("CHEMISTBD server is running");
});
// Global error handler
// app.use(globalErrorHandler);
app.use((req, res, next) => {
    res.status(status.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND...!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found",
        },
    });
});
export default app;
//# sourceMappingURL=app.js.map