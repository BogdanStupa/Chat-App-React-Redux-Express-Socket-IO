import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentivationGuard } from './core/guards/authentivation.guard';
import { ChatComponent } from './modules/chat/chat/chat.component';

const routes: Routes = [
  {
    path: "signin",
    loadChildren: () => import("./modules/sign-in/sign-in.module").then(module => module.SignInModule),
  },
  {
    path: "signup",
    loadChildren: () => import("./modules/sign-up/sign-up.module").then(module => module.SignUpModule)
  },
  {
    path: "",
    component: ChatComponent,
    canActivate: [AuthentivationGuard]
  },
  {
    path: "**",
    loadChildren: () => import("./modules/not-found/not-found.module").then(module => module.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
