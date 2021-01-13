import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthentivationGuard } from './guards/authentivation.guard';
import { HttpErrorHandingInterceptor } from './interceptors/http-error-handing/http-error-handing.interceptor';
import { BASE_API_URL } from "./services/api-url/api-url.service";
import { RegisterService } from "./services/register/register.service";
import { BROWSER_STORAGE } from './services/storage/storage.service';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AuthenticationService,
    RegisterService,
    AuthentivationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandingInterceptor, multi: true },
    { provide: BASE_API_URL, useValue: "http://0.0.0.0:7000" },
    { provide: BROWSER_STORAGE, useFactory: () =>  localStorage },
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }