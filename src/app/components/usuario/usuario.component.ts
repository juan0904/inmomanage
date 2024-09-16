import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Usuario } from '../../models/usuario';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatButtonModule,MatCardModule,MatDialogModule, DatePipe],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements AfterViewInit{
  displayedColumns: string[] = [ 'UserName', 'Nombre', 
    'Estado', 'FechaCreacion','actions' ];
 

 dataSource = new MatTableDataSource<Usuario>(USUARIOS_DATA);

 @ViewChild(MatPaginator) paginator!: MatPaginator ;
 readonly _dialog = inject(MatDialog);

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }
 
 openAddEditUsuario(){
  //  this._dialog.open(PersAddEditComonent, {
  //    height: '400px',
  //    width: '600px',
  //  });
}
}

const USUARIOS_DATA: Usuario[]= [
  {
    UserName: "Juan3805",
    Clave:"12345678",
    Nombre:"Juan Jose",
    Apellido: "Sanchez",
    Estado:1,
    FechaCreacion: new Date("2024-09-16")
  }
]
