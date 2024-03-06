import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';


export interface TestCustomer {
  position: number;
  name: string;
  company: string;
  email: string;
  phone: number;
}

const ELEMENT_DATA: TestCustomer[] = [
  {position: 1, name: 'Nimal', company: 'Hayleys', email: 'nimal@hayleys.com', phone: 771234567},
  {position: 2, name: 'Sunil', company: 'Dialog', email: 'sunil@dialog.com', phone: 770123456},
  {position: 3, name: 'Ahamed', company: 'Unilever', email: 'ahamed@unilever.com', phone: 779012345},
  {position: 4, name: 'Dilmi', company: 'ABV', email: 'dilmi@abv.com', phone: 778901234},
  {position: 5, name: 'Hashan', company: 'SESW', email: 'hashan@sesw.com', phone: 777890123},
  {position: 6, name: 'Kamal', company: 'Singer', email: 'kamal@singer.com', phone: 776789012},
  {position: 7, name: 'Anjali', company: 'Cargills', email: 'anjali@cargills.com', phone: 775678901},
  {position: 8, name: 'Saman', company: 'Keells', email: 'saman@keells.com', phone: 774567890},
  {position: 9, name: 'Renuka', company: 'Ceylinco', email: 'renuka@ceylinco.com', phone: 773456789},
  {position: 10, name: 'Ruwan', company: 'SLT', email: 'ruwan@slt.com', phone: 772345678},
  {position: 11, name: 'Chaminda', company: 'Nestle', email: 'chaminda@nestle.com', phone: 771234567},
  {position: 12, name: 'Sanduni', company: 'Aitken Spence', email: 'sanduni@aitkenspence.com', phone: 770123456},
  {position: 13, name: 'Kavinda', company: 'HNB', email: 'kavinda@hnb.com', phone: 779012345},
  {position: 14, name: 'Manoj', company: 'HSBC', email: 'manoj@hsbc.com', phone: 778901234},
  {position: 15, name: 'Ishara', company: 'Sampath Bank', email: 'ishara@sampathbank.com', phone: 777890123},
  {position: 16, name: 'Tharindu', company: 'PABC', email: 'tharindu@pabc.com', phone: 776789012},
  {position: 17, name: 'Thilini', company: 'DFCC', email: 'thilini@dfcc.com', phone: 775678901},
  {position: 18, name: 'Asanka', company: 'Commercial Bank', email: 'asanka@combank.com', phone: 774567890},
  {position: 19, name: 'Janaka', company: 'Pan Asia Bank', email: 'janaka@pab.com', phone: 773456789},
  {position: 20, name: 'Kushan', company: 'NDB', email: 'kushan@ndb.com', phone: 772345678},
  {position: 21, name: 'Ranil', company: 'Peoples Bank', email: 'ranil@peoplesbank.com', phone: 771234567},
  {position: 22, name: 'Malika', company: 'Hatton National Bank', email: 'malika@hnb.com', phone: 770123456},
  {position: 23, name: 'Mahesh', company: 'Union Bank', email: 'mahesh@unionbank.com', phone: 779012345},
  {position: 24, name: 'Chathura', company: 'Seylan Bank', email: 'chathura@seylanbank.com', phone: 778901234},
  {position: 25, name: 'Sachith', company: 'Standard Chartered', email: 'sachith@sc.com', phone: 777890123},
  {position: 26, name: 'Tharaka', company: 'Commercial Leasing', email: 'tharaka@comleasing.com', phone: 776789012},
  {position: 27, name: 'Indika', company: 'Softlogic', email: 'indika@softlogic.com', phone: 775678901},
  {position: 28, name: 'Harsha', company: 'Hemas', email: 'harsha@hemas.com', phone: 774567890},
  {position: 29, name: 'Gayani', company: 'Odel', email: 'gayani@odel.com', phone: 773456789},
  {position: 30, name: 'Rajitha', company: 'Glitz', email: 'rajitha@glitz.com', phone: 772345678},
  {position: 31, name: 'Tharindra', company: 'Nike', email: 'tharindra@nike.com', phone: 771234567},
  {position: 32, name: 'Prasanna', company: 'Adidas', email: 'prasanna@adidas.com', phone: 770123456},
  {position: 33, name: 'Supun', company: 'Puma', email: 'supun@puma.com', phone: 779012345},
  {position: 34, name: 'Ranjan', company: 'New Balance', email: 'ranjan@newbalance.com', phone: 778901234},
  {position: 35, name: 'Namal', company: 'Under Armour', email: 'namal@underarmour.com', phone: 777890123},
  {position: 36, name: 'Dinusha', company: 'Reebok', email: 'dinusha@reebok.com', phone: 776789012},
  {position: 37, name: 'Roshan', company: 'Converse', email: 'roshan@converse.com', phone: 775678901},
  {position: 38, name: 'Sameera', company: 'Vans', email: 'sameera@vans.com', phone: 774567890},
  {position: 39, name: 'Lasith', company: 'Sketchers', email: 'lasith@sketchers.com', phone: 773456789},
  {position: 40, name: 'Chamari', company: 'Fila', email: 'chamari@fila.com', phone: 772345678}
  
];

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  displayedColumns: string[] = ['position', 'name', 'company', 'email', 'phone','actions'];

  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  length = this.dataSource.data.length;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;
  
  constructor() {}

  ngOnInit() {
    this.length = this.length;
    this.pageSize = this.pageSize;
    this.pageIndex = this.pageIndex;
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.dataSource.data = ELEMENT_DATA.slice(startIndex, endIndex);    
  }
  
  deleteMethod(name: string) {
    if(confirm("Are you sure to delete?")) {
      console.log("Implement delete functionality here");
    }
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.data = ELEMENT_DATA.slice(startIndex, endIndex);
  }
}