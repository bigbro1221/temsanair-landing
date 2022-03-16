import {HttpClient} from '@angular/common/http';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new MultiTranslateHttpLoader(httpClient, [
    {prefix: "./assets/locale/core/", suffix: ".json"}
  ]);
}
