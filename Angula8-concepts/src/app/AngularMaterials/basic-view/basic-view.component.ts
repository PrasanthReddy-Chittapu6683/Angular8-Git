import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar, MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { DialogueBoxComponent } from 'src/app/dialogue-box/dialogue-box.component';



@Component({
  selector: 'app-basic-view',
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.scss']
})
export class BasicViewComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  private toggleModel = false;
  notifications = 2;
  notificationsHide = false;
  showSpinner = false;
  openSideNav = false;
  navbarLog = ""
  selectedValue = "vue";
  selectedGroupValue = "";
  mycontrol = new FormControl();
  userControl = new FormControl();
  filteredOptions: Observable<string[]>;




  minDate = new Date();
  maxDate = new Date(2020, 9, 4)

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSourceTable = new MatTableDataSource(ELEMENT_DATA);

  mdoel = 'dateFilter'
  autoOptions: string[] = ['Angualr', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular1' },
    { name: 'Angula2' },
    { name: 'Angula3' },
    { name: 'Angula4' },
  ]
  users = [
    new User('Misha', 'Arnold'),
    new User('Felix', 'Godines'),
    new User('Odessa', 'Thorton'),
    new User('Julianne', 'Gills'),
    new User('Virgil', 'Hommel'),
    new User('Justa', 'Betts'),
    new User('Keely', 'Millington'),
    new User('Blanca', 'Winzer'),
    new User('Alejandrina', 'Pallas'),
    new User('Rosy', 'Tippins'),
    new User('Winona', 'Kerrick'),
    new User('Reynaldo', 'Orchard'),
    new User('Shawn', 'Counce'),
    new User('Shemeka', 'Wittner'),
    new User('Sheila', 'Sak'),
    new User('Zola', 'Rodas'),
    new User('Dena', 'Heilman'),
    new User('Concepcion', 'Pickrell'),
    new User('Marylynn', 'Berthiaume'),
    new User('Howard', 'Lipton'),
    new User('Maxine', 'Amon'),
    new User('Iliana', 'Steck'),
    new User('Laverna', 'Cessna'),
    new User('Brittany', 'Rosch'),
    new User('Esteban', 'Ohlinger'),
    new User('Myron', 'Cotner'),
    new User('Geri', 'Donner'),
    new User('Minna', 'Ryckman'),
    new User('Yi', 'Grieco'),
    new User('Lloyd', 'Sneed'),
    new User('Marquis', 'Willmon'),
    new User('Lupita', 'Mattern'),
    new User('Fernande', 'Shirk'),
    new User('Eloise', 'Mccaffrey'),
    new User('Abram', 'Hatter'),
    new User('Karisa', 'Milera'),
    new User('Bailey', 'Eno'),
    new User('Juliane', 'Sinclair'),
    new User('Giselle', 'Labuda'),
    new User('Chelsie', 'Hy'),
    new User('Catina', 'Wohlers'),
    new User('Edris', 'Liberto'),
    new User('Harry', 'Dossett'),
    new User('Yasmin', 'Bohl'),
    new User('Cheyenne', 'Ostlund'),
    new User('Joannie', 'Greenley'),
    new User('Sherril', 'Colin'),
    new User('Mariann', 'Frasca'),
    new User('Sena', 'Henningsen'),
    new User('Cami', 'Ringo')
  ];
  selectedUsers: User[] = new Array<User>();
  filteredUsers: Observable<User[]>;
  lastFilter: string = '';
  constructor(private _matSnackBar: MatSnackBar, private _dialog: MatDialog) { }
  displayAutoCompleteValue = (v) => {
    return v ? v : undefined;
  }
  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
  openDialog() {
    let dialogRef = this._dialog.open(DialogueBoxComponent, { data: { name: 'PRCV' } })
    dialogRef.afterClosed().subscribe(result => {
      alert('You clicked on :' + result)
    })
  }

  dataTableRowClick(row) {
    console.log("Dat Table Row Click" + JSON.stringify(row))
  }
  applyDataTableFilter(filterValue: string) {
    this.dataSourceTable.filter = filterValue.trim().toLowerCase()
  }
  ngOnInit() {
    //For Single Select AutoComplete control
    this.filteredOptions = this.mycontrol.valueChanges.pipe(startWith(''),
      map(value => this._filter(value))
    );
    //For Multi Select AutoComplete control
    this.filteredUsers = this.userControl.valueChanges.pipe(
      startWith<string | User[]>(''),
      map(value => typeof value === 'string' ? value : this.lastFilter),
      map(filter => this.filter(filter))
    );
    this.toggleModel = false;
  }
  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.autoOptions.filter(option =>
      option.toLowerCase().includes(filterValue)
    )
  }

  openSnackBar = (message, action) => {

    let snackBarRef = this._matSnackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(() => {
      alert('Snack Bar dismissed')
    })
    snackBarRef.onAction().subscribe(() => {
      alert('Snack Bar action triggered')
    })
  }
  openCustomSnackBar() {
    this._matSnackBar.openFromComponent(CustomBuildSnackBarTemplateComponent, { duration: 2000 })
  }

  //#region  AutoComplete MultiSelect
  filter(filter: string): User[] {
    this.lastFilter = filter;
    if (filter) {
      return this.users.filter(option => {
        return option.firstname.toLowerCase().indexOf(filter.toLowerCase()) >= 0
          || option.lastname.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
      })
    } else {
      return this.users.slice();
    }
  }
  displayFn(value: User[] | string): string | undefined {
    let displayValue: string;
    if (Array.isArray(value)) {
      value.forEach((user, index) => {
        if (index === 0) {
          displayValue = user.firstname + ' ' + user.lastname;
        } else {
          displayValue += ', ' + user.firstname + ' ' + user.lastname;
        }
      });
    } else {
      displayValue = value;
    }
    return displayValue;
  }

  optionClicked(event: Event, user: User) {
    event.stopPropagation();
    this.toggleSelection(user);
  }

  toggleSelection(user: User) {
    user.selected = !user.selected;
    if (user.selected) {
      this.selectedUsers.push(user);
    } else {
      const i = this.selectedUsers.findIndex(value => value.firstname === user.firstname && value.lastname === user.lastname);
      this.selectedUsers.splice(i, 1);
    }

    this.userControl.setValue(this.selectedUsers);
  }
  //#endregion AutoComplete MultiSelect


  toggelButtonClick(e) {
    debugger;
    this.toggleModel = e.source.checked;
  }
  onClickBadgeIcon = () => {
    this.notificationsHide = !this.notificationsHide;
  }
  showHidespinner = () => {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 4000)


  }
  TabChanges = (index) => {
    console.log("Selected Index is : " + index)
  }
  log = (value) => {
    this.navbarLog = value;
  }


}
export class User {
  constructor(public firstname: string, public lastname: string, public selected?: boolean) {
    if (selected === undefined) selected = false;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'custom-snackbar',
  template: `<span style='color:orange'> 
  This is from Custom Template component 
  </span> `

})
export class CustomBuildSnackBarTemplateComponent {

}