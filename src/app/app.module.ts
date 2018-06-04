
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatDialogModule, MatTabsModule, MatSelectModule, MatSelect, MatMenuModule, MatSliderModule } from '@angular/material';

//For the base url
import { baseURL } from './shared/baseurl';

//Rest stuff
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

//Services
import { RegUserService } from "./services/reguser.service";
import { DatagrabService } from "./services/datagrab.service";

//Custom Validator
import { userNameValidator } from "./validators/userName";

import 'hammerjs';
import { NgxChartsModule } from "@swimlane/ngx-charts";


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { InputDataComponent } from './input-data/input-data.component';
import { HeaderComponent } from './header/header.component';
import { Graph1Component } from './graph1/graph1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    LoginDialogComponent,
    InputDataComponent,
    HeaderComponent,
    Graph1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatMenuModule,
    MatSliderModule,
    NgxChartsModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [{ provide: 'BaseURL', useValue: baseURL },
    RegUserService,
    DatagrabService,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }