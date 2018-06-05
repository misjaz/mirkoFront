import {ITdDataTableSortChangeEvent, TdDataTableSortingOrder} from '@covalent/core';
import {Sort} from './sort.model';
/**
 * Created by boristuponja on 21/06/2017.
 */


export class SortFactory {
  static createDefault(): Sort {
    return null;
  }

  static createSortFromEvent(event: ITdDataTableSortChangeEvent): Sort {
    const sortDirection: string = event.order === TdDataTableSortingOrder.Ascending ? 'asc' : 'desc';

    const sort: Sort = new Sort(event.name, sortDirection);

    return sort;
  }
}
