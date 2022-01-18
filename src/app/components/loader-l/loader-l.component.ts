import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader-l',
  templateUrl: './loader-l.component.html',
  styleUrls: ['./loader-l.component.scss']
})
export class LoaderLComponent implements OnInit {

  constructor( public loaderService:LoaderService ) { }

  ngOnInit(): void {
  }

}
