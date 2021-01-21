import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EpisodesComponent } from './episodes/episodes.component';
import { MoreComponent } from './more/more.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { AboutComponent } from './about/about.component'
// import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HeaderComponentComponent,
    FooterComponent,
    CommentsComponent,
    EpisodesComponent,
    MoreComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    ButtonsModule
    // OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
