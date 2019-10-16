const calculateStylePoints = (stylePoints) => {
    let max = Math.max(...stylePoints);
    let min = Math.min(...stylePoints);

    return stylePoints.reduce((a, b) => a + b) - (max + min);
};

module.exports = calculateStylePoints;