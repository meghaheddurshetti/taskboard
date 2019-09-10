import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Patdetails } from './patdetails';
import { Category } from './demo';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  details: FormGroup;
  callerdetails: FormGroup;
  general: FormGroup;
  address: FormGroup;
  contact: FormGroup;
  other: FormGroup;

  isActive: Boolean = false;
  isActive1: Boolean =true;

  closeResult: string;
  constructor(private modalService: NgbModal, private fb: FormBuilder) { }

  patname: string = '';
  fisrtname: string = '';
  lastname: string = '';
  phone: string = '';
  email: string = '';
  arr: Patdetails[] = [
    new Patdetails('bs', 'zz', '12365', 'sdgvdv'),
    new Patdetails('ak', 'zz', '12365', 'sdgvdv'),
    new Patdetails('ak', 'zz', '12365', 'sdgvdv'),
    new Patdetails('ak', 'zz', '12365', 'sdgvdv'),
    new Patdetails('bs', 'zz', '12365', 'sdgvdv'),
    new Patdetails('nm', 'zz', '12365', 'sdgvdv'),
    new Patdetails('re', 'zz', '12365', 'sdgvdv'),
    new Patdetails('yt', 'zz', '12365', 'sdgvdv'),
    new Patdetails('jh', 'zz', '12365', 'sdgvdv')
  ];

  ngOnInit() {

    this.details = this.fb.group({
      patientname: new FormControl(null,Validators.required),
      patientDOB: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null)
    });

    this.callerdetails = this.fb.group({
      callername: new FormControl(null,Validators.required),
      phoneno: new FormControl(null,Validators.required)
    });

    this.general = this.fb.group({
      firstname: new FormControl(null),
      middlename: new FormControl(null),
      lastname: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl(null)
    });

    this.address = this.fb.group({
      address1: new FormControl(null),
      address2: new FormControl(null),
      zip: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null)
    });

    this.contact = this.fb.group({
      home: new FormControl(null),
      cell: new FormControl(null),
      workphone: new FormControl(null),
      email: new FormControl(null),
      mode: new FormControl(null)
    });

    this.other = this.fb.group({
      ssn: new FormControl(null),
      language: new FormControl(null)
    });

  }

  openform(reg, content1, i) {

    let pn = this.details.get('patientname').value;
    console.log(pn);

    for (let i = 0; i < this.arr.length; i--) {
    let pname = this.arr[i].patname;
    console.log(this.arr.length);
    console.log(pname);
    // if (this.details.value.patientname === this.arr && this.arr[0].patname) {
      if(pname===pn){
      console.log('pname');
      this.modalService.open(content1, { size: 'xl' });
    }

    else {
      console.log(pn);

      this.general.patchValue({
        firstname: this.details.value.patientname
      });

      this.modalService.open(reg, { size: 'xl' });
    }
  }
}

  checked:boolean = false;
addprop1(e){
    if(e.target.checked){
      this.checked = true;
    }else{
      this.checked = false;
    }
  }

//   onCheck() {
//     this.isActive = true;
// }
// onCheck1() {
//  return this.isActive1 = false;
// }
mustBeChecked(control: FormControl): {[key: string]: string} {
  if (!control.value) {
    return {mustBeCheckedError: 'Must be checked'};
  } else {
    return null;
  }
}


}
