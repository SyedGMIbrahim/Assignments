function clock() {
    let now = new Date();

    let hours24 = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let hours12 = now.getHours() % 12 || 12;
    hours12 = String(hours12).padStart(2, '0');
    let ampm = now.getHours() < 12 ? "AM" : "PM";

    console.clear();
    console.log(`${hours24}:${minutes}:${seconds}`);
    console.log(`${hours12}:${minutes}:${seconds} ${ampm}`);
}

setInterval(clock, 1000);