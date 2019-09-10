import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
  updatedItem;
  closeResult: string;
  task_id:number;
   title:string='';
   due_date:string='';
   desc:string='';
   priority:string='';
   assigned_to:string='';
   assigned_date:string='';
   comments:string='';
   status:string='';


   in_progress:Task[]=[];
   qa:Task[]=[];
   ut:Task[]=[];
   st:Task[]=[];
   use:Task[]=[];
  arr:Task[]=[
    new Task(1,'create website','14/08/2019','Online room booking','High','chetan','13/08/2019','good design','done'),
    new Task(2,'create website','10/08/2019','Highly secured','High','chetan2','13/08/2019','good design','done'),
    new Task(3,'Adding filter','19/08/2019','User friendly','High','chetan3','13/08/2019','good design','done'),
    new Task(4,'create website','17/08/2019','Online room booking1','High','abc','13/08/2019','good design','done'),
     new Task(5,'create website','18/08/2019','Online room booking2','High','abc','13/08/2019','good design','done'),
    new Task(6,'create website','19/08/2019','Online room booking3','High','abc','13/08/2019','good design','done'),
    //  new Task(7,'create website','16/08/2019','Online room booking4','High','abc','13/08/2019','good design','done'),
    // new Task(8,'create website','19/08/2019','Online room booking5','High','abc','13/08/2019','good design','done'),
    //  new Task(9,'create website','13/08/2019','Online room booking6','High','abc','13/08/2019','good design','done'),
    //  new Task(10,'create website','24/08/2019','Online room booking7','High','abc','13/08/2019','good design','done')
  ];

  constructor(private modalService: NgbModal ) { }

  ngOnInit() {
  }

  openEdit(content, i) {
    console.log(i);
    this.task_id = this.arr[i].task_id;
    this.title = this.arr[i].title;
    this.due_date = this.arr[i].due_date;
    this.desc = this.arr[i].desc;
    this.priority = this.arr[i].priority;
    this. assigned_to = this.arr[i]. assigned_to;
    this.assigned_date = this.arr[i].assigned_date;
    this.comments = this.arr[i].comments;
    this.status = this.arr[i].status;
    console.log('updating');

    this.updatedItem = i;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
  UpdateItem() {
    let data = this.updatedItem;
    for (let i = 0; i < this.arr.length; i++) {
      if (i == data) {
        this.arr[i].due_date = this.due_date;
        this.arr[i].priority = this.priority ;
        console.log(this.arr);

        this.modalService.dismissAll();
      }
    }
  }
  // pushCard(status){
  //     this.in_progress.push(new Task(this.task_id, this.title,this.due_date,this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
  //    alert("successfully added");
  //   this.modalService.dismissAll();
  // }
//   pushCard(item:Task){
//     this.arr.splice(this.arr.indexOf( item ), 1);
//   //   this.in_progress.push(new Task(this.task_id, this.title,this.due_date,this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
//   //  alert("successfully added");

//   this.modalService.dismissAll();
// }
// removeTask(item:Task){
//   this.arr.splice(this.arr.indexOf(item), 1);
// }
// pushCard(item:Task){
//   if (confirm("Do you want to delete")){
//     console.log("Implement delete functionality here");
// this.arr.splice(this.arr.indexOf(item), 1);
// this.modalService.dismissAll();
//   }
// }
modo(value: string){
  switch(value) {
    case "mod2":
      this.in_progress.push(new Task(this.task_id, this.title,this.due_date,this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
      this.modalService.dismissAll();
      break;
    case "mod3":
      this.qa.push(new Task(this.task_id, this.title,this.due_date,this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
      this.modalService.dismissAll();
      break;
    case "mod4":
      this.ut.push(new Task(this.task_id, this.title,this.due_date,this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
      this.modalService.dismissAll();
      break;

       case "mod5":
        this.st.push(new Task(this.task_id, this.title,this.due_date,this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
        this.modalService.dismissAll();
        break;

       case "mod6":
        this.use.push(new Task(this.task_id, this.title,this.due_date,this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
        this.modalService.dismissAll();

        break;
  }
}

}
