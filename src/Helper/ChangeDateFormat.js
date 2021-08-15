const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Changes date format from MM-DD-YYYY to DD MON, YYYY Format
 * @param { string } date in MM-DD-YYYY
 * @returns { string } date in DD MON, YYYY Format
 */
export default function ChangeDateFormat(dateString) {
  if (typeof dateString !== "string") {
    console.log(
      "Human Date helper requies date in MM-DD-YYYY format and string type"
    );
    return;
  }

  let dateParts = dateString.split("-");
  
  if (dateParts.length === 3) {
    let [month, date, year] = dateParts;
    month = parseInt(month);

    const newDateString = `${date} ${MONTHS[month - 1]}, ${year}`;
    return newDateString;
  } else {
    return dateString;
  }
}
