import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heading:string='heading 1'

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onTabClick(event: { tab: { textLabel: any; }; }) {
    console.log('event',event);
    console.log('value', event.tab.textLabel);
    // this.heading=event.tab.textLabel
    if(event.tab.textLabel=='tab 1'){
      this.heading = 'heading 1'
    }
    else if(event.tab.textLabel=='tab 2'){
      this.heading = 'heading 2'
    }
    else if(event.tab.textLabel=='tab 3'){
      this.heading = 'heading 3'
    } 
    

  }


  signOut(): void {
    alert('working signoutS')
    this.authService.signOut();
    this.router.navigate(['/login'])
  }

}
