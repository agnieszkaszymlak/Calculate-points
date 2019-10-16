const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let type;
    let basicPoint;
    let distanceDifference;
    let totalPoints;

    distanceDifference = distance - kPoint;

    if (hillSize >= 85 && hillSize < 110) {
        type = 'normal';
    } else if (hillSize >= 110 && hillSize < 185) {
        type = 'large';
    } else if (hillSize >= 185) {
        type = 'mamut';
    }

    if (hillSize >= 185) {
        basicPoint = 120;
    } else {
        basicPoint = 60;
    }

    switch(type) {
        case 'normal':
            totalPoints = distanceDifference * 2
            break;
        case 'large':
            totalPoints = distanceDifference * 1.8
            break;
        case 'mamut':
            totalPoints = distanceDifference * 1.2
    }

    return totalPoints + basicPoint;
};

module.exports = calculateDistancePoints;