/**
 * Created by boristuponja on 21/06/2017.
 */

export class Sort {

  constructor(public sortBy: string, private sortDirection: string) {
  }

  createUrlParams() {
    let urlParams = '';

    if (this.sortBy) {
      urlParams += `sort_by=${this.sortBy}`;

      if (this.sortDirection) {
        urlParams += `&sort_direction=${this.sortDirection}`;
      }

      return urlParams;
    }
  }
}
