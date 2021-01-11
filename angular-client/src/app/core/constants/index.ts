import { isDevMode } from "@angular/core";
import devConfig from "../configs/dev.json";
import prodConfig from "../configs/prod.json";

export const constants = !isDevMode() ? (prodConfig as any) : (devConfig as any);