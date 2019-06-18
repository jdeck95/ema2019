export function compareDate(date1, date2) {
    return new Date(date1).setHours(0, 0, 0, 0) === date2.setHours(0, 0, 0, 0);
};