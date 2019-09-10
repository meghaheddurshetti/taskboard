  import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
@Component({
  selector: 'app-patientsinfo',
  templateUrl: './patientsinfo.component.html',
  styleUrls: ['./patientsinfo.component.scss']
})
export class PatientsinfoComponent implements OnInit {
  control = new FormControl();
  relations: string[] = ['child', 'Parent', 'parkwest surgical LLT', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;


  details:FormGroup;
  callerdetails:FormGroup;
  isactive:Boolean=false;
  // tslint:disable-next-line: no-unused-expression
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.details=this.fb.group({
      patientname:new FormControl(null),
      patientDOB:new FormControl(null),
      phone:new FormControl(null),
      email:new FormControl(null)
    });

    this.callerdetails=this.fb.group({
      callername:new FormControl(null),
      phoneno:new FormControl(null)
    });
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
  map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.relations.filter(relation => this._normalizeValue(relation).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


onchecked()
{
  this.isactive=true;
}

  }
