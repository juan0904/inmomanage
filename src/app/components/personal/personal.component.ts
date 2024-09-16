import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog'; 
import { Personal } from '../../models/personal'; 
import { PersAddEditComponent } from './pers-add-edit/pers-add-edit.component';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatButtonModule,MatCardModule,MatDialogModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent implements AfterViewInit{
  displayedColumns: string[] = [ 'Identificacion', 'Nombres', 
     'Direccion', 'Barrio', 'Celular',  'actions' ];
  

  dataSource = new MatTableDataSource<Personal>(PERSONAL_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  readonly _dialog = inject(MatDialog);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  openAddEditPropiedad(){
    this._dialog.open(PersAddEditComponent, {
      height: '400px',
      width: '600px',
    });
 }
}

const PERSONAL_DATA: Personal[] = [
  {
    CodigoPersonal: 1,
    TipoDocumento: 1,
    Identificacion: "987654321",
    Nombres: "Ana",
    Apellidos: "Gómez",
    Direccion: "Avenida Siempre Viva 742",
    Barrio: "Norte",
    Telefono1: "555-4321",
    Telefono2: "555-8765",
    MunicipioCod: 101,
    Celular: "310-9876543",
    FechaNacimiento: new Date("1990-05-15T00:00:00Z"),
    Sexo: "Femenino",
    FechaIngreso: new Date("2024-01-01T00:00:00Z"),
    TipoPersonal: 2,
    Estado: 1,
    FechaModificacion: null,
    FechaEliminacion: null,
    UsuarioModif: "admin"
  }
];
