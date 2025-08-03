import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  standalone: false
})
export class CertificatesComponent implements OnInit {

  constructor(private router : ActivatedRoute, ) { }

  ngOnInit(): void {
  }

}
