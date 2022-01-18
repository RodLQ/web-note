import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StartLoginComponent } from './components/start-login/start-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteRegistrationComponent } from './components/note-registration/note-registration.component';
import { WebSocketService } from './services/web-socket.service';
import { LoaderLComponent } from './components/loader-l/loader-l.component';
import { LoaderInterceptorService } from './services/interceptors/loader-interceptor.service';
import { NoteListLoadComponent } from './components/note-list-load/note-list-load.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { NoteRegBSheetComponent } from './components/note-reg-b-sheet/note-reg-b-sheet.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserUpdateBSheetComponent } from './components/user-update-b-sheet/user-update-b-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartLoginComponent,
    RegistrationComponent,
    DashboardComponent,
    NoteListComponent,
    NoteRegistrationComponent,
    LoaderLComponent,
    NoteListLoadComponent,
    DashboardNavComponent,
    NoteRegBSheetComponent,
    UserUpdateComponent,
    UserUpdateBSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [WebSocketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
