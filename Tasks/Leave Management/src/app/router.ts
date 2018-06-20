
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import{login} from './login/login';
import { employeedashboard } from "./maindashboard/employeedashboard/employeedashboard";
import { managerdashboard } from "./maindashboard/managerdashboard/managerdashboard";
import { leaveform } from "./leavepage/leaveform/leaveform";
import { viewleave } from "./leavepage/viewleave/viewleave";



export const router : Routes=[
{path:'',component:login},
{path:'login',component:login},
{path:'maindashboard/employeedashboard',component:employeedashboard},
{path:'maindashboard/managerdashboard',component:managerdashboard},
{path:'leavepage/leaveform',component:leaveform},
{path:'leavepage/viewleave',component:viewleave}


];