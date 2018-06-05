import { SortDirection } from './sort-direction.enum';

/**
 * Created by boristuponja on 23/06/2017.
 */

export class SortUtil {

  // Enable sort by nested properties
  public static sortData(data: any[], sortBy: string, sortDirection: SortDirection = SortDirection.ASC) {

    if (sortBy) {

      // Extract properties
      const props = sortBy.split('.');
      const len = props.length;

      data.sort(function (a, b) {
        let direction = 0;
        let i = 0;

        // Go to the most nested property
        while (i < len) {
          a = a[props[i]];
          b = b[props[i]];
          i++;

          // If one or both are null, no need to go deeper
          if (!a || !b) {
            break;
          }
        }


        // If first one is null, then it is lower
        if (!a) {
          direction = -1;
        } else if (!b) {
          // If second one is null, then it is lower
          direction = 1;
        } else {
          // Compare values
          if (a < b) {
            direction = -1;
          } else if (a > b) {
            direction = 1;
          }
        }

        return direction * (sortDirection === SortDirection.DESC ? -1 : 1);
      })
    }

    return data;
  }

  // Enable sort by mutliple fields. Data is sorted by the order of fields.
  public static sortDataByFields(data: any[], sortBy: string[], sortDirection: SortDirection = SortDirection.ASC) {

    if (sortBy) {

      data.sort((a, b) => {
        let direction = 0;



        // Go over fields
        for (const sortField of sortBy) {
          let tmpA = a;
          let tmpB = b;

          // Extract properties
          const props = sortField.split('.');
          const len = props.length;

          let i = 0;
          // Go to the most nested property
          while (i < len) {
            tmpA = tmpA[props[i]];
            tmpB = tmpB[props[i]];
            i++;

            // If one or both are null, no need to go deeper
            if (!tmpA || !tmpB) {
              break;
            }
          }

          // If first one is null, then it is lower
          if (!tmpA) {
            direction = -1;
          } else if (!tmpB) {
            // If second one is null, then it is lower
            direction = 1;
          } else {
            // Compare values
            if (tmpA < tmpB) {
              direction = -1;
              break; // No need to check other sort fields
            } else if (tmpA > tmpB) {
              direction = 1;
              break; // No need to check other sort fields
            }
          }

          // If tmpA and tmpB is equal, try next field

        }

        return direction * (sortDirection === SortDirection.DESC ? -1 : 1);
      })
    }

    return data;
  }
}
