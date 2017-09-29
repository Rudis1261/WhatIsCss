import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

// Layout Components
import { NavHeaderComponent } from './nav-header.component';
import { NavFooterComponent } from './nav-footer.component';
import { LoadingBar } from './loading.component';

// Services
import { LazyComponent } from './lazy.component';
import { LoadscriptService } from './loadscript.service';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemesComponent } from './themes/themes.component';
import { DropdownComponent } from './dropdown/dropdown.component';

// Pipes
import { FilterPipe } from './filter.pipe';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { PanelComponent } from './panel/panel.component';
import { BasicsComponent } from './basics/basics.component';
import { HelpBlockComponent } from './help-block/help-block.component';
import { EditorComponent } from './editor/editor.component';
import { HideTextPipe } from './hide-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ThemesComponent,
    DropdownComponent,
    NavHeaderComponent,
    NavFooterComponent,
    LazyComponent,
    LoadingBar,
    FilterPipe,
    UsefulLinksComponent,
    PanelComponent,
    BasicsComponent,
    HelpBlockComponent,
    EditorComponent,
    HideTextPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'whatiscss.appspot.com'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    LoadscriptService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
