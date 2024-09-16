import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Propiedad } from '../../models/propiedad';
import { PropAddEditComponent } from './prop-add-edit/prop-add-edit.component';


@Component({
  selector: 'app-propiedad',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatButtonModule,MatCardModule,MatDialogModule],
  templateUrl: './propiedad.component.html',
  styleUrl: './propiedad.component.css'
})
export class PropiedadComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'contact', 'date','valor', 'actions'];
  dataSource = new MatTableDataSource<Propiedad>(PROPIEDADES_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  readonly _dialog = inject(MatDialog);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  openAddEditPropiedad(){
     this._dialog.open(PropAddEditComponent, {
       height: '400px',
       width: '600px',
     });
  }
}
const PROPIEDADES_DATA: Propiedad[] = [
  {
    IdentificacionPropiedad: 1,
    Referencia: 'PROP-001',
    TipoPropiedad: 2,
    Operacion: 1,
    MunicipioCod: 101,
    Zona: 1,
    Barrio: 'Centro',
    ConCartel: true,
    Valor: 150000.00,
    MetrosCuadrados: 100,
    Dormitorios: 3,
    Banos: 2,
    Pisos: 1,
    CobradorId: 1,
    VendedorId: 2,
    CodigoCliente: 1,
    Telefono: '555-1234',
    FechaIngreso: '2024-01-01',
    Estado: 1,
    PorcentajeAlquiler: 10,
    Direccion: 'Calle Falsa 123',
    UsuarioModif: 'admin'
  },
  {
    IdentificacionPropiedad: 2,
    Referencia: 'PROP-002',
    TipoPropiedad: 1,
    Operacion: 2,
    MunicipioCod: 102,
    Zona: 2,
    Barrio: 'Norte',
    ConCartel: false,
    Valor: 200000.00,
    MetrosCuadrados: 120,
    Dormitorios: 4,
    Banos: 3,
    Pisos: 2,
    CobradorId: 2,
    VendedorId: 3,
    CodigoCliente: 2,
    Telefono: '555-5678',
    FechaIngreso: '2024-02-01',
    Estado: 1,
    PorcentajeAlquiler: 15,
    Direccion: 'Avenida Siempre Viva 742',
    UsuarioModif: 'admin2'
  },
  {
    IdentificacionPropiedad: 3,
    Referencia: 'PROP-003',
    TipoPropiedad: 3,
    Operacion: 1,
    MunicipioCod: 103,
    Zona: 3,
    Barrio: 'Sur',
    ConCartel: true,
    Valor: 180000.00,
    MetrosCuadrados: 90,
    Dormitorios: 2,
    Banos: 1,
    Pisos: 1,
    CobradorId: 1,
    VendedorId: 4,
    CodigoCliente: 3,
    Telefono: '555-7890',
    FechaIngreso: '2024-03-01',
    Estado: 2,
    PorcentajeAlquiler: 12,
    Direccion: 'Calle Principal 100',
    UsuarioModif: 'admin3'
  }
];
