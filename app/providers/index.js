import express from "express";

import AppServiceProvider from "./AppServiceProvider";
import MongoServiceProvider from "./MongoServiceProvider";
import RouteServiceProvider from "./RouteServiceProvider";

const app = express();

export const providers = [
	new AppServiceProvider(app),
	new RouteServiceProvider(app),
	new MongoServiceProvider(),
];
