import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-primeiro-banner',
  templateUrl: './primeiro-banner.component.html',
  styleUrl: './primeiro-banner.component.scss'
})
export class PrimeiroBannerComponent {
  constructor(private router: Router) { }
  outroBanner() {
    this.router.navigateByUrl("outro")
  }


}
