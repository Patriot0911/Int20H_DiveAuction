import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'PlannedDates', async: false })
export class ValidatePlannedDates implements ValidatorConstraintInterface {
  validate(_: Date, args: any) {
    const { startDate, endDate } = args.object;
    if (!startDate && !endDate) return true;
    return (
      (!startDate && endDate > new Date()) ||
      (endDate > startDate && startDate > new Date())
    );
  }

  defaultMessage() {
    return 'Start date should be greater or than equal to current date. End date should be greater than start date.';
  }
}
