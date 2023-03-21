import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = [];
	  for (let i = 0; i < this.satellites.length; i++) {
		if (this.satellites[i].type.toLowerCase() === type) {
			count.push(this.satellites[i].name);
		 }
	  }
	return count.length;
 }
}