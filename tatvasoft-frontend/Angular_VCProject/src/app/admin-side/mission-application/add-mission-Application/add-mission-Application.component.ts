// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup';
// import ValidateForm from 'src/app/Helper/ValidateForm';
// import { AdminsideServiceService } from 'src/app/service/adminside-service.service';

// @Component({
//   selector: 'app-add-mission-Application',
//   templateUrl: './add-mission-Application.component.html',
//   styleUrls: ['./add-mission-Application.component.css']
// })
// export class AddMissionApplicationComponent implements OnInit {
//   addMissionApplicationForm:FormGroup;
//   skillId:any;
//   editData:any;
//   constructor(public fb:FormBuilder,public router:Router,public toast:NgToastService,public service:AdminsideServiceService,public activateRoute:ActivatedRoute) {
//     this.skillId = this.activateRoute.snapshot.paramMap.get('Id');
//   }
//   ngOnInit(): void {
//     this.MissionSkillFormValidate();
//     if(this.skillId != null)
//     {
//       this.FetchDataById(this.skillId);
//     }
//   }
//   MissionSkillFormValidate(){
//     this.addMissionApplicationForm = this.fb.group({
//       id:[0],
//       skillName:['',Validators.compose([Validators.required])],
//       status:['',Validators.compose([Validators.required])]
//     });
//   }
//   FetchDataById(id:any)
//   {
//     this.service.MissionSkillById(id).subscribe((data:any)=>{
//       if(data.result == 1)
//       {
//         this.editData = data.data;
//         this.addMissionApplicationForm.patchValue(this.editData);
//       }
//       else
//       {
//         this.toast.error({detail:"ERROR",summary:data.message,duration:3000});
//       }
//     },err=>this.toast.error({detail:"ERROR",summary:err.message,duration:3000}))
//   }
//   OnSubmit(){
//       let value = this.addMissionApplicationForm.value;
//       if(this.addMissionApplicationForm.valid)
//       {
//           if(value.id == 0)
//           {
//               this.InsertData(value);
//           }
//           else
//           {
//             this.UpdateData(value);
//           }
//       }
//       else
//       {
//         ValidateForm.ValidateAllFormFields(this.addMissionApplicationForm);
//       }
//   }
//   InsertData(value:any)
//   {
//     this.service.AddMissionSkill(value).subscribe((data:any)=>{
//       if(data.result == 1)
//       {
//         this.toast.success({detail:"SUCCESS",summary:data.data,duration:3000});
//         setTimeout(() => {
//           this.router.navigate(['admin/missionSkill']);
//         }, 1000);
//       }
//       else{
//         this.toast.error({detail:"ERROR",summary:data.message,duration:3000});
//       }
//     },err=> this.toast.error({detail:"ERROR",summary:err.message,duration:3000}))
//   }
//   UpdateData(value:any){
//     this.service.UpdateMissionSkill(value).subscribe((data:any)=>{
//       if(data.result == 1)
//       {
//         this.toast.success({detail:"SUCCESS",summary:data.data,duration:3000});
//         setTimeout(() => {
//           this.router.navigate(['admin/missionSkill']);
//         }, 1000);
//       }
//       else{
//         this.toast.error({detail:"ERROR",summary:data.message,duration:3000});
//       }
//     },err=> this.toast.error({detail:"ERROR",summary:err.message,duration:3000}))
//   }
//   OnCancel(){
//       this.router.navigate(['admin/missionSkill']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/Helper/ValidateForm';
import { AdminsideServiceService } from 'src/app/service/adminside-service.service';

@Component({
  selector: 'app-add-mission-application',
  templateUrl: './add-mission-application.component.html',
  styleUrls: ['./add-mission-application.component.css']
})
export class AddMissionApplicationComponent implements OnInit {
  addMissionApplicationForm: FormGroup;
  skillId: any;
  editData: any;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public toast: NgToastService,
    public service: AdminsideServiceService,
    public activateRoute: ActivatedRoute
  ) {
    this.skillId = this.activateRoute.snapshot.paramMap.get('Id');
  }

  ngOnInit(): void {
    this.MissionSkillFormValidate();
    if (this.skillId != null) {
      this.FetchDataById(this.skillId);
    }
  }

  MissionSkillFormValidate() {
    this.addMissionApplicationForm = this.fb.group({
      id: [0],
      skillName: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  FetchDataById(id: any) {
    this.service.MissionSkillById(id).subscribe((data: any) => {
      if (data.result === 1) {
        this.editData = data.data;
        this.addMissionApplicationForm.patchValue(this.editData);
      } else {
        this.toast.error({ detail: "ERROR", summary: data.message, duration: 3000 });
      }
    }, err => this.toast.error({ detail: "ERROR", summary: err.message, duration: 3000 }));
  }

  OnSubmit() {
    if (this.addMissionApplicationForm.valid) {
      const value = this.addMissionApplicationForm.value;
      if (value.id === 0) {
        this.InsertData(value);
      } else {
        this.UpdateData(value);
      }
    } else {
      ValidateForm.ValidateAllFormFields(this.addMissionApplicationForm);
    }
  }

  InsertData(value: any) {
    this.service.AddMissionSkill(value).subscribe((data: any) => {
      if (data.result === 1) {
        this.toast.success({ detail: "SUCCESS", summary: data.data, duration: 3000 });
        setTimeout(() => {
          this.router.navigate(['admin/missionSkill']);
        }, 1000);
      } else {
        this.toast.error({ detail: "ERROR", summary: data.message, duration: 3000 });
      }
    }, err => this.toast.error({ detail: "ERROR", summary: err.message, duration: 3000 }));
  }

  UpdateData(value: any) {
    this.service.UpdateMissionSkill(value).subscribe((data: any) => {
      if (data.result === 1) {
        this.toast.success({ detail: "SUCCESS", summary: data.data, duration: 3000 });
        setTimeout(() => {
          this.router.navigate(['admin/missionSkill']);
        }, 1000);
      } else {
        this.toast.error({ detail: "ERROR", summary: data.message, duration: 3000 });
      }
    }, err => this.toast.error({ detail: "ERROR", summary: err.message, duration: 3000 }));
  }

  OnCancel() {
    this.router.navigate(['admin/missionSkill']);
  }
}
