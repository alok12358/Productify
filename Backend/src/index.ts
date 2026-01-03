import express from "express"
import { ENV } from "./config/env"
import { clerkMiddleware } from '@clerk/express'
import cors from "cors";

const app = express();

app.use(clerkMiddleware())
app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.json({

        message: "Welcome to Productfy API - powerd by PostgreSQL, Drizzle ORM & Clerk Auth",
        endpoints: {
            user: "/api/products",
            products: "/api/products",
            comments: "/api/comments",
        },
    });
});

app.listen(ENV.PORT, () => console.log("Serve is up and running on PORT:", ENV.PORT))