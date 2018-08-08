import { Component, OnInit } from '@angular/core';
import {PlansService} from '../../../_services/plans/plans.service';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-plan-add',
  templateUrl: './plan-add.component.html',
  styleUrls: ['./plan-add.component.scss']
})
export class PlanAddComponent implements OnInit {

  title = 'Crear Nuevo Plan';
  labelPositionCheckBox = 'before';
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(public plansService: PlansService) { }

  ngOnInit() {
  }

}
