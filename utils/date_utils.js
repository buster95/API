String.prototype.toDate = function (format) {
    const regex = format.toLocaleLowerCase()
        .replace(/\bd+\b/, '(?<day>\\d+)')
        .replace(/\bm+\b/, '(?<month>\\d+)')
        .replace(/\by+\b/, '(?<year>\\d+)');
    const parts = new RegExp(regex).exec(this) || {};
    const { year, month, day } = parts.groups || {};
    return parts.length === 4 ?
        new Date(year < 100 ? 2000 + Number(year) : year, month - 1, day) :
        undefined;
}

function stringToDate(data, format) {
    const regex = format.toLocaleLowerCase()
        .replace(/\bd+\b/, '(?<day>\\d+)')
        .replace(/\bm+\b/, '(?<month>\\d+)')
        .replace(/\by+\b/, '(?<year>\\d+)');
    const parts = new RegExp(regex).exec(data) || {};
    const { year, month, day } = parts.groups || {};
    return parts.length === 4 ?
        new Date(year < 100 ? 2000 + Number(year) : year, month - 1, day) :
        undefined;
}


module.exports = {
    stringToDate
}