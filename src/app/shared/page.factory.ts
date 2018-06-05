/**
 * Created by boristuponja on 21/06/2017.
 */

import { IPageChangeEvent, ITdDataTableSortChangeEvent } from '@covalent/core';
import { Page } from './page.model';


export class PageFactory {
  static createDefault(): Page {
    return new Page(1, 10);
  }

  static createFromEvent(event: IPageChangeEvent): Page {
    return new Page(event.page, event.pageSize)
  }
}
