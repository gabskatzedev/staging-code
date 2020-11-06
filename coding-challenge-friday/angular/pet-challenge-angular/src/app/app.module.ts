import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './services/ajax.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { SecondViewComponent } from './second-view/second-view.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, LandingPageComponent, SecondViewComponent, FirstViewComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      /* ORDER OF THE PATHS MATTER, the wildcard should be at the bottom */
      {path: 'welcome', component: LandingPageComponent},
      {path: 'firstview', component: FirstViewComponent},
      {path: 'secondview', component: SecondViewComponent},
      {path: '', component: LandingPageComponent},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
