import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare function require(path: string): any;

export interface Campanha {
  id: number;
  campanha: string;
  itens: string[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public campanhas: any;
  constructor(private http: HttpClient ) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/campanha').subscribe(
	  	res => {
	  	  this.campanhas = res;
			}
		);

  }

}
