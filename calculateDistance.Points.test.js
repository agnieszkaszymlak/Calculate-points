const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    it('should return 86 points on normal type', () => {
        const actual = calculateDistancePoints(111.0, 109, 98);

        const expected = 86;

        assert.equal(actual, expected);
    });
    it('should return 24 points on normal type', () => {
        const actual = calculateDistancePoints(80.0, 109, 98);

        const expected = 24;

        assert.equal(actual, expected);
    });
    it('should return 153 points on mamut type', () => {
        const actual = calculateDistancePoints(227.5, 225, 200);

        const expected = 153;

        assert.equal(actual, expected);
    });
    it('should return 52.8 points on mamut type', () => {
        const actual = calculateDistancePoints(144.0, 225, 200);

        const expected = 52.8;

        assert.equal(actual, expected);
    });
    it('should return 85.2 points on large type', () => {
        const actual = calculateDistancePoints(134.0, 134, 120);

        const expected = 85.2;

        assert.equal(actual, expected);
    });
    it('should return 37.5 points on large type', () => {
        const actual = calculateDistancePoints(107.5, 134, 120);

        const expected = 37.5;

        assert.equal(actual, expected);
    });
});