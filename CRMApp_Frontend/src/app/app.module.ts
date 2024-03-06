import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerCreateUpdateComponent } from './customer-create-update/customer-create-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerCreateUpdateComponent,
    CustomerDeleteComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    InterceptorComponent,
    RegisterUserComponent,
    AuthenticationComponent,
    MainNavComponent
 ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'customer-create-update', component: CustomerCreateUpdateComponent },
      { path: 'customer-delete', component: CustomerDeleteComponent  },
      { path: 'customer-details', component: CustomerDetailsComponent },
      { path: 'list', component: CustomerListComponent },
      { path: 'login', component: AuthenticationComponent },
      { path: 'registration', component : RegisterUserComponent},
      { path: "**", component: InterceptorComponent },
    ]),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
