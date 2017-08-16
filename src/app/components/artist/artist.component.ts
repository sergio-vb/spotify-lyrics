import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: `artist.component.html`
})
export class ArtistComponent implements OnInit{
    id:string;
    artist:Artist[];
    albums:Album[];

    constructor(
        private _spotifyService:SpotifyService,
        private _route:ActivatedRoute)
    {

    }

    ngOnInit(){
        

        this._spotifyService.getToken()
            .subscribe(res => {
                this._route.params
                    .map(params => params['id'])
                    .subscribe( id => {
                        this._spotifyService.getArtist(id, res.access_token)
                            .subscribe(artist => {
                                this.artist = artist;
                            });
                    });
            })
                
    }

    /*
    searchMusic(){
        //console.log("Searching for music:", this.searchStr);
        this._spotifyService.getToken()
            .subscribe(res => {
                this._spotifyService.searchMusic(this.searchStr ,'artist' , res.access_token)
                    .subscribe(res=> {
                        //console.log("Search response: ", res); 
                        this.searchRes = res.artists.items;
                    })
            })
    } */
}
