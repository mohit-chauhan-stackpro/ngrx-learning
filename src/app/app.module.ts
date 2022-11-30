import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { YoutubeLayoutComponent } from './components/layout/youtube-layout/youtube-layout.component';
import { PostComponent } from './containers/post/post.component';
import { UsersComponent } from './containers/users/users.component';
import { ViewUserComponent } from './containers/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    YoutubeLayoutComponent,
    PostComponent,
    UsersComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
