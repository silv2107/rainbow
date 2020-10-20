// change automatic color




function rainbowLog(string) {
    var colors = ["\x1b[30m", "\x1b[31m", "\x1b[32m", "\x1b[33m", "\x1b[34m", "\x1b[35m", "\x1b[36m", "\x1b[37m"];
    var reset = "\x1b[0m";
    var colorString = "";
    for(let i = 0; i < string.length; i++) {
        colorString += colors[i % colors.length] + string[i];
    }
    console.log(colorString +reset);

}

module.exports = rainbowLog;
