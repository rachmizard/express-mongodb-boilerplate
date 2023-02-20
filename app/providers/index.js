import express from "express";
import Passport from "../utils/passport";

import AppServiceProvider from "./AppServiceProvider";
import MongoServiceProvider from "./MongoServiceProvider";
import PassportServiceProvider from "./PassportServiceProvider";
import RouteServiceProvider from "./RouteServiceProvider";

const app = express();

export const providers = [
	new AppServiceProvider(app),
	new PassportServiceProvider(app, new Passport()),
	new RouteServiceProvider(app),
	new MongoServiceProvider(),
];
