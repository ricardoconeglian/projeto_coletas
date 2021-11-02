import { MatSnackBar } from '@angular/material/snack-bar';
import { Coleta } from '../app/components/coleta/coleta.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PostService {
    api_link: string = "http://localhost:8000";//porta que aponta para o django, mudar para ip da maquina que vai ficar
    node_red: string = "http://localhost:1880"
    proc: string = "http://10.110.12.178:1850";
    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        })
    }
    getAllColetas(): Observable<Coleta[]> {
        return this.http.get<Coleta[]>(this.api_link + '/coleta')
    }

    create(coleta: Coleta): Observable<Coleta>{
        return this.http.post<Coleta>(this.api_link+'/create', coleta)
    }

    nodered(coleta: Coleta): Observable<Coleta> {
        return this.http.post<Coleta>(this.node_red + '/node', coleta)
    }

    processo(coleta: Coleta): Observable<Coleta> {
        return this.http.post<Coleta>(this.proc + '/node', coleta)
    }
}