function showTime() {
    var date = new Date();
    var dayName = date.getDay();
    var monthName = date.getMonth();
    var yearName = date.getYear();
   
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    
    var cal = "Day: " + days[dayName] + " \nMonth: " + months[monthName] + " \nYear: " + yearName + " ";
    document.getElementById("MyCalendar").innerText = cal;
    setTimeout(showTime, 1000);
}

showTime();
