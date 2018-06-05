import { Sort } from './sort.model';
import { Page } from './page.model';
/**
 * Created by boristuponja on 21/06/2017.
 */

export class ParamUtil {
  static createPageSortUrlAdditions(page: Page, sort: Sort): string {
    let urlAdditions = '';

    if (page) {
      urlAdditions += `?${page.createUrlParams()}`;
    }

    if (sort) {
      urlAdditions += (urlAdditions === '') ? '?' : '&';

      urlAdditions += sort.createUrlParams();
    }

    return urlAdditions;
  }

  static createParams(data: any, additionToExisting = false) {
    let params = '';

    for (const key of Object.keys(data)) {

      // If no params has been created yet and these params are not addition to existing link, start params section
      if (params === '' && !additionToExisting) {
        params += '?';
      } else {
        // If there are already params in the link, append new
        params += '&';
      }
      params += `${key}=${data[key]}`;
    }

    return params;
  }

}
