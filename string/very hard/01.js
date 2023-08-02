// 24-Hour Time
// Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.

// Examples
// convertTime(“07:05:45PM”) ➞ “19:05:45”

// convertTime(“12:40:22AM”) ➞ “00:40:22”

// convertTime(“12:45:54PM”) ➞ “12:45:54”
// Notes
// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock



function convertTime(time) {
  const period = time.slice(-2);
  const [hours, minutes, seconds] = time.slice(0, -2).split(":").map(Number);
  
  let militaryHours = hours;

  if (period === "PM" && hours !== 12) {
    militaryHours = (hours + 12) % 24;
  } else if (period === "AM" && hours === 12) {
    militaryHours = 0;
  }

  return `${String(militaryHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Test cases
console.log(convertTime("07:05:45PM")); // Output: "19:05:45"
console.log(convertTime("12:40:22AM")); // Output: "00:40:22"
console.log(convertTime("12:45:54PM")); // Output: "12:45:54"
