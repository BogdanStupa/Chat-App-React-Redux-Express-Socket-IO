import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentivationGuard } from './core/guards/authentivation.guard';

const routes: Routes = [
  {
    path: "signin",
    loadChildren: () => import("./pages/sign-in/sign-in.module").then(module => module.SignInModule),
  },
  {
    path: "signup",
    loadChildren: () => import("./pages/sign-up/sign-up.module").then(module => module.SignUpModule)
  },
  {
    path: "",
    loadChildren: () => import("./pages/chat/chat.module").then(module => module.ChatModule),
    canActivate: [AuthentivationGuard]
  },
  {
    path: "**",
    loadChildren: () => import("./pages/not-found/not-found.module").then(module => module.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
