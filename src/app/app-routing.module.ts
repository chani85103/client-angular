import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { InstructionsComponent } from './components/instructions/instructions.component';

const routes: Routes = [
{path:"instructions",component:InstructionsComponent},
{path:"form",component:FormComponent},
{path:"*",redirectTo:"instructions"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
