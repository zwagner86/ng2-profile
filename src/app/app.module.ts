import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ProfileInfoComponent} from "./profile-info/profile-info.component";
import {SkillInfoComponent} from "./skill-info/skill-info.component";
import {SkillTileComponent} from "./skill-tile/skill-tile.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    SkillInfoComponent,
    SkillTileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
