import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: `search.component.html`,
})
export class SearchComponent{
    searchStr:string;

    constructor(private spotifyService:SpotifyService){

    }

    searchMusic(){
        console.log("Searching for music:", this.searchStr);
        this.spotifyService.searchMusic(this.searchStr).subscribe( (data) => { console.log(data)});
    }
}
