export const dateStringToDate = (dateString: string): Date => {
  const [year, month, day] = dateString
    .split('/')
    .map((ele: string): number => parseInt(ele))
    .reverse();
  return new Date(year, month - 1, day);
};
