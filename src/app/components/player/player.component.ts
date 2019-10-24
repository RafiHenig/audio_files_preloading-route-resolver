      import { Component, OnInit } from '@angular/core';
      import { ActivatedRoute } from '@angular/router';
      
      @Component({
        selector: 'app-player',
        templateUrl: './player.component.html',
        styleUrls: ['./player.component.scss']
      })
      export class PlayerComponent implements OnInit {
        songs: string[];
      
        constructor(private route: ActivatedRoute) { }
      
        ngOnInit() {
            this.songs = this.route.snapshot.data.songs;
        }
      }
