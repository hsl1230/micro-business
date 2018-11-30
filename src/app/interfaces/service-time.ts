import { TimePeriod } from './service-time';
import { Time } from '@angular/common';

export interface ServiceTime {
  allDaysWorkingHours: TimePeriod[];
  weekdaysWorkingHours: TimePeriod[];
  weekendsWorkingHours: TimePeriod[];
  holidaysWorkingHours: TimePeriod[];
  mondaysWorkingHours: TimePeriod[];
  tuesdaysWorkingHours: TimePeriod[];
  wednsdaysWorkingHours: TimePeriod[];
  thursdaysWorkingHours: TimePeriod[];
  FridaysWorkingHours: TimePeriod[];
  SaturdaysWorkingHours: TimePeriod[];
  SundaysWorkingHours: TimePeriod[];
  specialDaysWorkingHours: Map<string, TimePeriod[]>;
  fromDate: Date;
  toDate: Date;
}

export interface TimePeriod {
  from: Time;
  to: Time;
}


