/**
 * Created by boristuponja on 21/06/2017.
 */


export class Page {

  constructor(public page: number, public size: number) {
  }

  createUrlParams() {
    return `page=${this.page}&page_size=${this.size}`;
  }
}
