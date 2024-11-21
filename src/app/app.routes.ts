import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:"Home",component:HomeComponent},

    {path:"About",component:AboutComponent},
    {path:"Blog",component:BlogComponent},
    {path:"Features",component:FeaturesComponent},
    {path:"Login",component:LoginComponent},
    {path:"Contact",component:ContactComponent},

];
