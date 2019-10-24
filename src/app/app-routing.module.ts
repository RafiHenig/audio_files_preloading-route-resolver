      import { NgModule } from '@angular/core';
      import { Routes, RouterModule } from '@angular/router';
      import { PlayerComponent } from './components/player/player.component';
      import { ResolverService } from './services/resolver.service';
      
      
      const routes: Routes = [
        { path: "", component: PlayerComponent, resolve: { songs: ResolverService } }
      ];
      
      @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
        providers: [ResolverService]
      })
      export class AppRoutingModule { }
