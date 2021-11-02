import { PostService } from '../../../../services/coleta.service';
import { Coleta } from './../coleta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coleta-read',
  templateUrl: './coleta-read.component.html',
  styleUrls: ['./coleta-read.component.css']
})
export class ColetaReadComponent implements OnInit {

  coletas: Coleta[] = []
  displayedColumns = ['id', 'name', 'value']

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllColetas().subscribe(coletas => {
      this.coletas = coletas
    })
  }

}
