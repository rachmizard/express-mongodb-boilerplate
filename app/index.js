import { providers } from "app/providers";

for (const provider of providers) {
	provider.boot();
}
