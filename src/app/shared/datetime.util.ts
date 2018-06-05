import { Injectable } from '@angular/core';
import { MatDateFormats } from '@angular/material';
/**
 * Created by boristuponja on 26/06/2017.
 */

@Injectable()
export class DateTimeUtil {

  public defaultDateTimeFormat(): string {
    return 'dd.MM.yyyy HH:mm:ss';
  }

  public formatToStandardDate(dateString: string): string {

    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let dayStr: string = String(day);
    let monthStr: string = String(month);
    let hoursStr: string = String(hours);
    let minuteStr: string = String(minutes);
    let secondStr: string = String(seconds);

    if (day < 10) {
      dayStr = String('0' + day);
    }

    if (month < 10) {
      monthStr = String('0' + month);
    }

    if (hours < 10) {
      hoursStr = String('0' + hours);
    }

    if (minutes < 10) {
      minuteStr = String('0' + minutes);
    }

    if (seconds < 10) {
      secondStr = String('0' + seconds);
    }

    return dayStr + '.' + monthStr + '.' + date.getFullYear() + ' ' +
      hoursStr + ':' + minuteStr + ':' + secondStr;
  }

  public formatToDBDate(dateString: string): string {
    const date = new Date(dateString);
    return this.getDbDate(date);
  }

  public formatToDBDateTime(dateString: string): string {
    const date = new Date(dateString);
    return this.getDbDateTimeNonIso(date);
  }

  /**
   * Get “database format” date from  local time. Format: `yyyy-MM-dd`.
   * @param date Date.
   */
  getDbDate(date: Date): string {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const p = (n) => n < 10 ? '0' + n : n;
    return `${y}-${p(m)}-${p(d)}`;
  }

  getDbDateTime(date: Date): string {
    const y = date.getFullYear();
    const M = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const u = (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5);
    const p = (n) => n < 10 ? '0' + n : n;
    return `${y}-${p(M)}-${p(d)}T${p(h)}:${p(m)}:${p(s)}.${u}Z`;
  }

  getDbDateTimeNonIso(date: Date) {
    const y = date.getFullYear();
    const M = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const u = (date.getMilliseconds() / 1000).toFixed(3).slice(2, 5);
    const p = (n) => n < 10 ? '0' + n : n;
    return `${y}-${p(M)}-${p(d)} ${p(h)}:${p(m)}:${p(s)}`;
  }
}
