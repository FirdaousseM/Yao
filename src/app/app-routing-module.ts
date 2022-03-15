import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { CreateChapitreComponent } from "./create-chapitre/create-chapitre.component";
import { CreateModuleComponent } from "./create-module/create-module.component";
import { EditChapitreComponent } from "./edit-chapitre/edit-chapitre.component";
import { EditModuleComponent } from "./edit-module/edit-module.component";
import { ModulesComponent } from "./modules/modules.component";
import { SingleModuleComponent } from "./single-module/single-module.component";


const appRoutes: Routes = [

    /** MODULE **/

    { path: '', component: AccueilComponent },
    { path: 'modules', component: ModulesComponent },
    { path: 'modules/create', component: CreateModuleComponent },
    { path: 'modules/:idMod', component: SingleModuleComponent },
    { path: 'modules/:idMod/edit', component: EditModuleComponent },

    /** CHAPITRE **/

    { path: 'modules/:idMod/edit/content', component: EditChapitreComponent },
    { path: 'modules/:idMod/edit/content/create', component: CreateChapitreComponent },
    { path: 'modules/:idMod/edit/content/:idChap', component: EditChapitreComponent }


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