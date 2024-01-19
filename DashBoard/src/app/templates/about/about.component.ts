import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private fb:FormBuilder,private router:Router,private activeRouter:ActivatedRoute){}
  onApply()
  {
    this.router.navigateByUrl('home/enquire');
  }
    
}
