import express from "express";
import Passport from "core/utils/passport";

import {
	AppServiceProvider,
	MongoServiceProvider,
	PassportServiceProvider,
	RouteServiceProvider,
} from "core/providers";

const app = express();

const providers = [
	new AppServiceProvider(app),
	new PassportServiceProvider(app, new Passport()),
	new RouteServiceProvider(app),
	new MongoServiceProvider(),
];

for (const provider of providers) {
	provider.boot();
}
