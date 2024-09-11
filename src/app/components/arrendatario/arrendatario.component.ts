import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ArrenAddEditComponent } from './arren-add-edit/arren-add-edit.component';


@Component({
  selector: 'app-arrendatario',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatButtonModule,MatCardModule,MatDialogModule],
  templateUrl: './arrendatario.component.html',
  styleUrl: './arrendatario.component.css'
})
export class ArrendatarioComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'contact', 'date', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  readonly _dialog = inject(MatDialog);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  openAddEditArren(){
    this._dialog.open(ArrenAddEditComponent, {
      height: '400px',
      width: '600px',
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  contact: string;
  date: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1001, name: 'John Doe', contact: '123-456-7890', date: '2023-01-01'},
  {position: 1002, name: 'Jane Smith', contact: '234-567-8901', date: '2023-01-02'},
  {position: 1003, name: 'Michael Johnson', contact: '345-678-9012', date: '2023-01-03'},
  {position: 1004, name: 'Emily Davis', contact: '456-789-0123', date: '2023-01-04'},
  {position: 1005, name: 'Chris Lee', contact: '567-890-1234', date: '2023-01-05'},
  {position: 1006, name: 'Sarah Brown', contact: '678-901-2345', date: '2023-01-06'},
  {position: 1007, name: 'David Wilson', contact: '789-012-3456', date: '2023-01-07'},
  {position: 1008, name: 'Sophia Martinez', contact: '890-123-4567', date: '2023-01-08'},
  {position: 1009, name: 'Daniel Taylor', contact: '901-234-5678', date: '2023-01-09'},
  {position: 1010, name: 'Olivia Anderson', contact: '012-345-6789', date: '2023-01-10'},
  {position: 1011, name: 'Ethan Harris', contact: '111-222-3333', date: '2023-01-11'},
  {position: 1012, name: 'Ava Thompson', contact: '222-333-4444', date: '2023-01-12'},
  {position: 1013, name: 'Liam King', contact: '333-444-5555', date: '2023-01-13'},
  {position: 1014, name: 'Isabella Clark', contact: '444-555-6666', date: '2023-01-14'},
  {position: 1015, name: 'Lucas Lewis', contact: '555-666-7777', date: '2023-01-15'},
  {position: 1016, name: 'Mia Walker', contact: '666-777-8888', date: '2023-01-16'},
  {position: 1017, name: 'Benjamin Scott', contact: '777-888-9999', date: '2023-01-17'},
  {position: 1018, name: 'Amelia Adams', contact: '888-999-0000', date: '2023-01-18'},
  {position: 1019, name: 'Noah Baker', contact: '999-000-1111', date: '2023-01-19'},
  {position: 1020, name: 'Charlotte Evans', contact: '000-111-2222', date: '2023-01-20'},
];

