import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ErrorComponent } from './error/error.component';
import { workcomponents } from './work/work.component';
import { ExperienceComponent } from './experoence/Experience.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HeroComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'Experience', component: ExperienceComponent, title: 'Experience' },
  { path: 'skills', component: SkillsComponent, title: 'Skills' },
  { path: 'work', component: workcomponents, title: 'Work' },
  { path: '**', component: ErrorComponent, title: 'Not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
