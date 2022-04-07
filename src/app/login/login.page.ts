import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 item="";
  constructor( private activate:ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activate.snapshot.paramMap.get('id')
  }

}
