"use strict";

const util = require('util');

var colors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",
    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m"
};
var generateLog = function () {
    process.stdout.write(util.format.apply(this, arguments));
};
// generate string
function transform(args, str) {
    var result = '';
    for (var i in args) {
        if (args[i].substr(0, 1) == "!") {
            result += colors[args[i].substr(1)];
        }
        else {
            result += args[i];
        }
    }
    if (str) {
        return result + str;
    }
    else {
        return result;
    }
}
// write
function write() { generateLog(transform(arguments)); }
// write with carriage return
function writeln() { generateLog(transform(arguments, '\n')); }
// write with reset
function writeR() { generateLog(transform(arguments, '\x1b[0m')); }
// write with reset and carriage return
function writelnR() { generateLog(transform(arguments, '\x1b[0m\n')); }
exports.write = write;
exports.writeln = writeln;
exports.writeR = writeR;
exports.writelnR = writelnR;
