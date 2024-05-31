/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length === 0) return -1;
    const [last] = this.slice(-1)
    return last;

};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */