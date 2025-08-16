function formatDateOnly(date = new Date()) {
    const newDate = new Date(date);
    return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
}


module.exports = { formatDateOnly };