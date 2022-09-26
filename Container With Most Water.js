//const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height = [1, 2];

/* const height = [4, 3, 2, 1, 4]; */

var maxArea = function (height) {
    let vol,
        min;

    let max = 0;

    if (height.length === 2) {
        return Math.min(height[0], height[1]) * Math.min(height[0], height[1]);
    }
    else {
        for (let i = 0; i < height.length; i++) {
            for (let j = i + 1; j < height.length; j++) {
                min = Math.min(height[i], height[j]);
                vol = min * (j - i);
                if (vol > max)
                    max = vol;
            }
        }
    }

    return max;
};

console.log(maxArea(height));