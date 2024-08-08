import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetilesComponent } from './pages/product-detiles/product-detiles.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Ecommerce Project'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart'
  },
  {
    path: 'details/:id',
    component: ProductDetilesComponent ,
    title: 'Ecommerce Project'
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Not Found'
  }
];
