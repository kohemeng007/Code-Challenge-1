function totalSeconds(hours, minutes) {
    const secondsFromHours = hours * 3600;  // 1 hour = 3600 seconds
    const secondsFromMinutes = minutes * 60;  // 1 minute = 60 seconds
    return secondsFromHours + secondsFromMinutes;
}

// Example usage
const hours = 2;
const minutes = 30;
console.log(`Total seconds: ${totalSeconds(hours, minutes)}`);  // Output: 9000
