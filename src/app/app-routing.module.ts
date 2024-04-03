import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroBannerComponent } from './components/primeiro-banner/primeiro-banner.component';
import { OutroBannerComponent } from './components/outro-banner/outro-banner.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';

const routes: Routes = [
  { path: '', component: NewsLetterComponent },
  { path: 'outro', component: OutroBannerComponent },
  { path: 'primeiro', component: PrimeiroBannerComponent },
  { path: '**', component: NewsLetterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
