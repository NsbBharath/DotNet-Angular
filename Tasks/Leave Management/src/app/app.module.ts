import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import {login} from './login/login';
import {employeedashboard} from './maindashboard/employeedashboard/employeedashboard';
import {managerdashboard} from './maindashboard/managerdashboard/managerdashboard';
import {leaveform} from './leavepage/leaveform/leaveform';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {router} from './router';
import { viewleave } from './leavepage/viewleave/viewleave';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './maindashboard/employeedashboard/service';

@NgModule({
  declarations: [
    AppComponent,login,employeedashboard,managerdashboard,leaveform,viewleave,FilterPipe,
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,RouterModule,RouterModule.forRoot(router),NgxPaginationModule,
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
