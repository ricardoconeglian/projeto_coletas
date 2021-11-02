import { PostService } from './../../../../services/coleta.service';
import { Coleta } from './../coleta.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coleta-create',
  templateUrl: './coleta-create.component.html',
  styleUrls: ['./coleta-create.component.css']
})
export class ColetaCreateComponent implements OnInit {

  coleta: Coleta = {
    name: '',
    value: 0
  }


  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  createColeta(): void {
    this.postService.create(this.coleta).subscribe(res=> {
      this.postService.showMessage('Produto criado')
      console.log(res)
      this.router.navigate(['/coletas'])
    })
    this.node(this.coleta)
    
  }

  cancel(): void {
    this.router.navigate(['/coletas'])
  }

  node(coleta: Coleta): void {
    this.postService.nodered(coleta).subscribe()
    this.postService.processo(coleta).subscribe()

  }
}
