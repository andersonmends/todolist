
module.exports.getDate = function () {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let currentDay = today.toLocaleString("en-US", options);
    return currentDay;

}


module.exports.getDay = function () {
    let today = new Date();
    let options = {
        weekday: "long",
    };
    let currentDay = today.toLocaleString("en-US", options);
    return currentDay;

}




