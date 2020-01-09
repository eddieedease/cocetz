import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';


const appRoutes: Routes = [
  // { path: 'landing', component: LandingComponent },
  { path: 'site', component: SiteComponent },
  { path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  },
  { path: '**', component: SiteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only true
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
