import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
// import { Specaility } from './Speciality';
// import { DataService } from 'src/app/data.service';
import { GroupModel, EventSettingsModel, ResourceDetails, TreeViewArgs, ActionEventArgs, EventFieldsMapping, PopupOpenEventArgs, RenderCellEventArgs, View } from '@syncfusion/ej2-schedule';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { startWith, map } from 'rxjs/operators';
import { addClass, extend } from '@syncfusion/ej2-base';
import { doctorData } from './data';
import { DataService } from './data.service';
import { Specaility } from './specaility';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {

    constructor(private modalService: NgbModal, private _data: DataService) { }

    myCases=false;
    officeDashboard = false;
    adjusterDashboard = false;

   myControl = new FormControl();

  filteredOptions: Observable<Specaility[]>;
   closeResult: string;


   arr:Specaility[]=[];
 // maps the local data column to fields property
 public localFields: Object = { text: 'Name' };
 // set the placeholder to MultiSelect input element
 public localWaterMark: string = 'Select practice';

 public searchData1: { [key: string]: Object }[] = [
   {  Code: 'AU' },
   {  Code: 'BM' },
   {  Code: 'CA'},
   {  Code: 'CM' },
   {  Code: 'DK'},
   {  Code: 'FR'},
   {  Code: 'FI' },
   { Code: 'DE' },
   {  Code: 'GL'},
   { Code: 'HK'},
   { Code: 'IN'},
   {  Code: 'IT' },
   { Code: 'JP'},
   {  Code: 'MX' },
   {  Code: 'NO' },
   {  Code: 'PL'},
   { Code: 'CH' },
   {  Code: 'GB' },
   { Code: 'US'}];
   // maps the appropriate column to fields property
   public fields1: Object = { value: "Code" };
   // set the placeholder to the AutoComplete input
   public text1: string = "Find a code";
   //enable the highlight property to highlight the matched character in suggestion list
   public autofill1: Boolean = true;

   public searchData2: { [key: string]: Object }[] = [
     {Provider:'ABC' },
     {Provider:'DEF' },
     { Provider:'GHI'},
     {Provider:'GHI' },
     {Provider:'GHI' },
     { Provider:'GHI'},
     {Provider:'GHI' },
     {Provider:'ABC'},
     {Provider:'ABC' },
     { Provider:'ABC'},
     { Provider:'ABC'},
     { Provider:'ABC'},
     { Provider:'ABC'},
     { Provider:'ABC'},
     { Provider:'ABC'},
     {Provider:'ABC'},
     {Provider:'ABC' },
     { Provider:'ABC' },
     { Provider:'ABC'}];
     // maps the appropriate column to fields property
     public fields2: Object = { value: "Provider" };
     // set the placeholder to the AutoComplete input
     public text2: string = "Find a Provider";
     //enable the highlight property to highlight the matched character in suggestion list
     public autofill2: Boolean = true;

      arr1:Specaility[]=[];
     //   // maps the appropriate column to fields property
       public fields3: Object = { value: "Name" };
     //   // set the placeholder to the AutoComplete input
       public text3: string = "Find a Provider";
     //   //enable the highlight property to highlight the matched character in suggestion list
       public autofill3: Boolean = true;






 public data: Object[] = <Object[]>extend([], doctorData);
 public selectedDate: Date = new Date(2018, 3, 1);
 public currentView: View = 'WorkWeek';
 public allowResizing: boolean = false;
 public allowDragDrop: boolean = false;
 public resourceDataSource: Object[] = [

     { text: 'Hema@ 38 Astoria', id: 1, color: '',  workDays: [1, 2],startHour: '02:00', endHour: '07:00' },
     { text: 'Hema@ 45 DEAN', id: 2, color: '', workDays: [1, 3, 5], startHour: '12:00', endHour: '08:00' },
     { text: 'Hema@ 45 West NY ', id: 3, color: '', startHour: '11:00', endHour: ':00' }
 ];
 public group: GroupModel = { resources: ['Doctors'] };
 public eventSettings: EventSettingsModel = {
     dataSource: this.data,
     fields: {
         subject: { title: 'Service Type', name: 'Subject' },
         location: { title: 'Patient Name', name: 'Location' },
         description: { title: 'Summary', name: 'Description' },
         startTime: { title: 'From', name: 'StartTime' },
         endTime: { title: 'To', name: 'EndTime' }
     }
 };
 // @ViewChild('scheduleObj')
 public scheduleObj: ScheduleComponent;

getDoctorName(value: ResourceDetails | TreeViewArgs): string {
 return ((value as ResourceDetails).resourceData) ?
     (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string
     : (value as TreeViewArgs).resourceName;
}
getDoctorImage(value: ResourceDetails | TreeViewArgs): string {
 let resourceName: string = this.getDoctorName(value);
 return resourceName.replace(' ', '-').toLowerCase();
}
getDoctorLevel(value: ResourceDetails | TreeViewArgs): string {
 let resourceName: string = this.getDoctorName(value);
 return (resourceName === 'Will Smith') ? 'Capiola david' :  ( resourceName === '') ? '' : 'Dr Capiola David';
}

onActionBegin(args: ActionEventArgs): void {
 let isEventChange: boolean = (args.requestType === 'eventChange');
 if ((args.requestType === 'eventCreate' && (<Object[]>args.data).length > 0) || isEventChange) {
     let eventData: { [key: string]: Object } = (isEventChange) ? args.data as { [key: string]: Object } :
         args.data[0] as { [key: string]: Object };
     let eventField: EventFieldsMapping = this.scheduleObj.eventFields;
     let startDate: Date = eventData[eventField.startTime] as Date;
     let endDate: Date = eventData[eventField.endTime] as Date;
     let resourceIndex: number = [1, 2, 3].indexOf(eventData.DoctorId as number);
     args.cancel = !this.isValidateTime(startDate, endDate, resourceIndex);
     if (!args.cancel) {
         args.cancel = !this.scheduleObj.isSlotAvailable(startDate, endDate, resourceIndex);
     }
 }
}

isValidateTime(startDate: Date, endDate: Date, resIndex: number): boolean {
 let resource: ResourceDetails = this.scheduleObj.getResourcesByIndex(resIndex);
 let startHour: number = parseInt(resource.resourceData.startHour.toString().slice(0, 2), 10);
 let endHour: number = parseInt(resource.resourceData.endHour.toString().slice(0, 2), 10);
 return (startHour <= startDate.getHours() && endHour >= endDate.getHours());
}

onPopupOpen(args: PopupOpenEventArgs): void {
 if (args.target && args.target.classList.contains('e-work-cells')) {
     args.cancel = !args.target.classList.contains('e-work-hours');
 }
}

onRenderCell(args: RenderCellEventArgs): void {
 if (args.element.classList.contains('e-work-hours') || args.element.classList.contains('e-work-cells')) {
     addClass([args.element], ['willsmith', 'alice', 'robson'][parseInt(args.element.getAttribute('data-group-index'), 10)]);
 }
}

ngOnInit() {
 this._data.getAllSpeciality().subscribe(
   (data:Specaility[]) =>{
this.arr = data;
   }
 );
//filter method
 this.filteredOptions = this.myControl.valueChanges
 .pipe(
   startWith(''),
   map(value => typeof value === 'string' ? value : value.name),
   map(name => name ? this._filter(name) : this.arr.slice())
 );



}

displayFn(spec?: Specaility): string | undefined {
 return spec? spec.Name : undefined;
}

private _filter(name: string): Specaility[] {
 const filterValue = name.toLowerCase();

 return this.arr.filter(option => option.Name.toLowerCase().indexOf(filterValue) === 0);
}


openEdit(contents) {
 // this.modalService.open(contents, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
 //   this.closeResult = `Closed with: ${result}`;
 // }, (reason) => {
 //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
 // });
 this.modalService.open(contents, {size: 'lg'});
}
private getDismissReason(reason: any): string {
 if (reason === ModalDismissReasons.ESC) {
   return 'by pressing ESC';
 } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
   return 'by clicking on a backdrop';
 } else {
   return  `with: ${reason}`;
 }
}



onClickOD() {
 this.officeDashboard =true;
 this.adjusterDashboard =false;
}
onClickAD() {
 this.adjusterDashboard = true ;
 this.officeDashboard = false;
}



}
