import { InjectionToken } from '@angular/core';


export const BASE_API_URL = new InjectionToken<string>(
  "Base API Url",
  {
    providedIn: "root",
    factory: () => "http://0.0.0.0:7000"
  }
);