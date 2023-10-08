function getDayOfTheWeek(utc){

    const currentDateInMiliseconds = utc * 1000;
    const date = new Date(currentDateInMiliseconds);

    const currentDayIndex = date.getDay();
    
    let day;
    switch(currentDayIndex){
        case 0:
            day = 'Duminică';
            break;
        case 1:
            day = 'Luni';
            break;
        case 2:
            day = 'Marți';
             break;
        case 3:
            day = 'Miercuri';
            break;
        case 4:
            day = 'Joi';
            break;
        case 5:
            day = 'Vineri';
            break;
        case 6:
            day = 'Sâmbată';
            break;
            default:
            
            throw new Error("Indexul trebuie sa fie intre 0 - 6");
            }
    return day;
}


function getTime(utc){
    const currentDateInMiliseconds = utc * 1000;
    const date = new Date(currentDateInMiliseconds);     

    let hour = date.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return `${hour}:${minutes}`;
    // console.log(hoursAndMinutes);
}