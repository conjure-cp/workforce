import type { ParsedOptions } from "rrule/dist/esm/types";

import { ALL_WEEKDAYS, type ByWeekday, Frequency, type Weekday, type WeekdayStr } from "rrule";

/**
 * A subset of RRule options that define the end of a recurrence pattern.
 * As per the RFC 5545 standard, the `COUNT` and `UNTIL` options are mutually exclusive.
 * It is possible to have neither, in which case the recurrence pattern is infinite.
 *
 * @property count The number of occurrences in the recurrence pattern.
 * @property until The date & time at which the recurrence pattern ends.
 *
 * @see https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10
 */
type RecurrenceEnd =
  | {
      count: number;
      until?: null;
    }
  | {
      count?: null;
      until: Date;
    }
  | {
      count?: null;
      until?: null;
    };

type CoreOptions = {
  /**
   * If set, the event will only occur during specific months, represented as an array of month numbers (1-12). If null, the event occurs regardless of the month (subject to other options).
   */
  bymonth?: number[] | null;
  /**
   * Date & time at which the recurrence pattern starts. Defaults to the current date & time.
   */
  dtstart?: Date | null;
  /**
   * Interval between occurrences. The event occurs on every i-th occurrence that matches the other options (e.g. 1 = every occurrence, 2 = every other occurrence, etc.). Defaults to 1.
   */
  interval?: number;
  /**
   * The day when the week starts. MUST be one of the following constants: [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR, RRule.SA, RRule.SU]. Defaults to RRule.MO.
   */
  wkst?: Weekday | number | null;
};

/**
 * A subset of RRule options that apply when frequency is set to DAILY.
 *
 * Note: the rrule library allows all options to be set regardless of the frequency.
 * However, its actual implementation is unstable with some of them, and in any case such options break the RFC 5545 standard.
 */
export type DailyOptions = {
  /**
   * The days of the month when the event occurs. If null, the event occurs on every day that matches the other options.
   */
  bymonthday?: number[] | null;
  /**
   * The days of the week when the event occurs. If null, the event occurs on every day that matches the other options.
   *
   * Note: numeric `BYDAY` values are not allowed for `DAILY` recurrence patterns, as per the RFC 5545 standard.
   * We don't allow the `Weekday` type from the rrule library here, since it has an (optional) numeric component.
   */
  byweekday?: WeekdayStr[] | null;
  /**
   * The frequency of the recurrence pattern.
   */
  freq: Frequency.DAILY;
} & CoreOptions &
  RecurrenceEnd;

/**
 * A subset of RRule options that apply when frequency is set to WEEKLY.
 *
 * Note: the rrule library allows all options to be set regardless of the frequency.
 * However, its actual implementation is unstable with some of them, and in any case such options break the RFC 5545 standard.
 */
export type WeeklyOptions = {
  /**
   * If given, the event will occur only on the i-th occurrences within its "frequency period".
   *
   * Note: For `WEEKLY` frequency, the "frequency period" is a week, so this is similar to the `byweekday` option.
   * However, it differs in that it selects the i-th day within a week that matches the other options, rather than a specific day of the week.
   * For example: if `byweekday` is set to all weekdays, `bysetppos` to 1, and the event starts on a Thursday, the event will occur on that Thursday and then on the Monday of all subsequent weeks.
   *
   * This is consistent with RFC 5545 and `rrule` implementation, but it is not a common use case and generally not recommended.
   */
  bysetpos?: number[] | null;
  /**
   * The days of the week when the event occurs. If null, the event occurs on every day that matches the other options.
   *
   * Note: numeric `BYDAY` values are not allowed for `WEEKLY` recurrence patterns, as per the RFC 5545 standard.
   * We don't allow the `Weekday` type from the rrule library here, since it has an (optional) numeric component.
   */
  byweekday?: WeekdayStr[] | null;
  /**
   * The frequency of the recurrence pattern.
   */
  freq: Frequency.WEEKLY;
} & CoreOptions &
  RecurrenceEnd;

export type MonthlyOptions = {
  /**
   * The days of the month when the event occurs. If null, the event occurs on every day that matches the other options.
   */
  bymonthday?: number[] | null;
  /**
   * If given, the event will occur only on the i-th occurrences within its "frequency period".
   *
   * Note: For `MONTHLY` frequency, the "frequency period" is a month.
   * A common use case is to select the i-th occurrence of some day of the week within the month.
   * For example: if `byweekday` is set to all weekdays and `bysetpos` to 1, the event will occur on the first weekday of the month.
   */
  bysetpos?: number[] | null;
  /**
   * The days of the week when the event occurs. If null, the event occurs on every day that matches the other options.
   *
   * Note: this allows numeric `BYDAY` values, which are represented by `Weekday(weekday, n)`
   * For example: `Weekday(1, 2)` means `2MO`, aka the second Monday of the month.
   */
  byweekday?: ByWeekday[] | null;
  /**
   * The frequency of the recurrence pattern.
   */
  freq: Frequency.MONTHLY;
} & CoreOptions &
  RecurrenceEnd;

/**
 * A subset of RRule options that can be used to define a recurrence pattern.
 *
 * Note: frequecies other than `DAILY`, `WEEKLY`, and `MONTHLY` are not supported yet.
 *
 * @see MonthlyOptions
 * @see WeeklyOptions
 * @see DailyOptions
 * @see CoreOptions
 * @see RecurrenceEnd
 */
export type RecurrenceOptions = DailyOptions | WeeklyOptions | MonthlyOptions;

/**
 * A subset of RRule frequencies that are supported in this application.
 */
export type SupportedFrequency = Frequency.DAILY | Frequency.WEEKLY | Frequency.MONTHLY;

/**
 * Converts an RRule native `ParsedOptions` object to a `RecurrenceOptions` object, which is a subset of the RRule options that are supported in this application.
 * If any of the options are not supported, this function returns `null`.
 * @param po `ParsedOptions` object to convert
 * @returns `RecurrenceOptions` object or `null`
 */
export function toRecurrenceOptions(po: ParsedOptions): RecurrenceOptions | null {
  switch (po.freq) {
    case Frequency.DAILY: {
      const rest = {
        bymonth: po.bymonth,
        bymonthday: po.bymonthday,
        byweekday: po.byweekday ? po.byweekday.map((wd) => ALL_WEEKDAYS[wd]) : null,
        dtstart: po.dtstart,
        freq: po.freq,
        interval: po.interval,
        wkst: po.wkst
      };

      if (po.until) {
        return { ...rest, until: po.until };
      } else if (po.count) {
        return { ...rest, count: po.count };
      } else {
        return { ...rest };
      }
    }
    case Frequency.WEEKLY: {
      const rest = {
        bymonth: po.bymonth,
        bysetpos: po.bysetpos,
        byweekday: po.byweekday ? po.byweekday.map((wd) => ALL_WEEKDAYS[wd]) : null,
        dtstart: po.dtstart,
        freq: po.freq,
        interval: po.interval,
        wkst: po.wkst
      };

      if (po.until) {
        return { ...rest, until: po.until };
      } else if (po.count) {
        return { ...rest, count: po.count };
      } else {
        return { ...rest };
      }
    }
    case Frequency.MONTHLY: {
      const rest = {
        bymonth: po.bymonth,
        bymonthday: po.bymonthday,
        bysetpos: po.bysetpos,
        byweekday: po.byweekday,
        dtstart: po.dtstart,
        freq: po.freq,
        interval: po.interval,
        wkst: po.wkst
      };

      if (po.until) {
        return { ...rest, until: po.until };
      } else if (po.count) {
        return { ...rest, count: po.count };
      } else {
        return { ...rest };
      }
    }
  }

  return null;
}
