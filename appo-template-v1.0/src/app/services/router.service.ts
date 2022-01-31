import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  url = new BehaviorSubject('');
  zoom: Subject<boolean> = new Subject<any>();

  constructor(private router: Router) {
  }

  reload(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>this.router.navigate([uri]));
  }

  setUrl (url) {
    this.url.next(url);
  }

  getUrl() {
    return this.url.asObservable();
  }

  setZoom(val) {
    this.zoom.next(val);
  }

  getZoom() {
    return this.zoom;
  }
}

