import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';
import {StudentService} from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    SalaryComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path:'student',component:StudentComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'salary',component:SalaryComponent},
    
    ])
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
