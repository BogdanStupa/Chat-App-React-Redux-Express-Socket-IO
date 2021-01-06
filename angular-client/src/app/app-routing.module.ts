import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    loadChildren: () => import("./modules/chat/chat.module").then(module => module.ChatModule)
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
