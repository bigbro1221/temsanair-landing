import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

declare let $: any;

export interface Lang {
  value: string;
  viewValue: string;
  viewTranslate: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocService implements OnInit, OnDestroy {

  public defaultLang: string = '';
  public current = new BehaviorSubject('');
  subs: Subscription = new Subscription();
  langs: Lang[] = [
    {value: 'ru', viewValue: 'RU', viewTranslate: 'Русский'},
    {value: 'en', viewValue: 'EN', viewTranslate: 'English'},
    {value: 'uz', viewValue: 'UZ', viewTranslate: "O'zbek"}
  ];

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.subs.add(this.current.pipe(take(1)).subscribe(lang => {
      this.translate.setDefaultLang(lang || 'ru');
      this.defaultLang = lang || 'ru';
      this.translate.setDefaultLang('ru');
      this.translate.addLangs(['ru', 'en', 'uz']);
      this.defaultLang = this.translate.getBrowserLang();
      this.translate.use(this.defaultLang.match(/ru|en|uz/) ? this.defaultLang : 'ru');
    }));
  }

  ngOnInit() {
  }

  switchLanguage(language: string) {
    this.current.next(language);
    $('.langbtn').removeClass('active-lang');
    localStorage.setItem('lang',language)
    $('#langbtn_'+language).addClass('active-lang');
    this.translate.use(language);
    this.defaultLang = language;
  }

  getCurrentLang() {
    return this.current;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
