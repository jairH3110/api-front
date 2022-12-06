import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EntradaloginComponent } from './entradalogin/entradalogin.component';


const appRoutes:Routes=[


  {

path:'login', component:LoginComponent},
{path:'crud',component: HomeComponent},
{path:'entro-login',component: EntradaloginComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    HomeComponent,
    EntradaloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
