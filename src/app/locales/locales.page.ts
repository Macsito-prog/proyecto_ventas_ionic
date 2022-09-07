import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {

  nombre = ""
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre')

  }

}
