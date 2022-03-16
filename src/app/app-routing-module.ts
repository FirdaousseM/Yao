import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { CreateChapitreComponent } from "./create-chapitre/create-chapitre.component";
import { CreateModuleComponent } from "./create-module/create-module.component";
import { CreateProgrammeComponent } from "./create-programme/create-programme.component";
import { EditChapitreComponent } from "./edit-chapitre/edit-chapitre.component";
import { EditModuleComponent } from "./edit-module/edit-module.component";
import { EditProgrammeComponent } from "./edit-programme/edit-programme.component";
import { ModulesComponent } from "./modules/modules.component";
import { ProgrammeComponent } from "./programme/programme.component";
import { SingleModuleComponent } from "./single-module/single-module.component";
import { SingleProgrammeComponent } from "./single-programme/single-programme.component";


const appRoutes: Routes = [

    { path: '', component: AccueilComponent },

    /** PROGRAMME **/

    { path: 'programmes', component: ProgrammeComponent },
    { path: 'programmes/create', component: CreateProgrammeComponent },
    { path: 'programmes/:idProg', component: SingleProgrammeComponent },
    { path: 'programmes/:idProg/edit', component: EditProgrammeComponent },
    

    /** MODULE **/

    

    { path: 'programmes/:idProg/modules', component: ModulesComponent },
    { path: 'programmes/:idProg/modules/create', component: CreateModuleComponent },
    { path: 'programmes/:idProg/modules/:idMod', component: SingleModuleComponent },
    { path: 'programmes/:idProg/modules/:idMod/edit', component: EditModuleComponent },

    /** CHAPITRE **/

    { path: 'programmes/:idProg/modules/:idMod/edit/content', component: EditChapitreComponent },
    { path: 'programmes/:idProg/modules/:idMod/edit/content/create', component: CreateChapitreComponent },
    { path: 'programmes/:idProg/modules/:idMod/edit/content/:idChap', component: EditChapitreComponent }


]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],

    exports: [
        RouterModule
    ]
})



export class AppRoutingModule {

}