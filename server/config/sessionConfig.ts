import dotenv from "dotenv";
import session from "express-session";
import mongoose from "mongoose";

const MongooseStore = require("express-mongoose-store")(session, mongoose);
export interface sessionInterface {
  store: object;
  secret: string;
  resave: boolean;
  saveUninitialized: boolean;
  cookie: object;
}

const sessionConfig: sessionInterface = {
  store: new MongooseStore({ ttl: 600000 }),
  secret: "nodeauth",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    path: "/",
    secure: false,
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  }
};

export default sessionConfig;
