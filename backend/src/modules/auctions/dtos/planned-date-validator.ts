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
    return 'End date should be grater then start date or current date';
  }
}
