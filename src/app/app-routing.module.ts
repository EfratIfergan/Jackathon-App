import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions  } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


 
const routes: Routes = [
  {path: 'homePage', component:HomeComponent },
  {path: 'not-found', component: PageNotFoundComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'MyProfile' ,component:MyProfileComponent},
  {path:'login',component:LoginComponent},
  {path: '**', redirectTo: '/not-found'}
  
];


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: "reload",
  scrollOffset: [0, 64],
};
@NgModule({
  // imports: [RouterModule.forRoot(routes,{anchorScrolling:'enabled',useHash:true})],
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
 
})
export class AppRoutingModule {
  
 }
