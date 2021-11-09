function phoneticLookup(val) {
    var result = '';
    var lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank'
    };
    return lookup[val];
    return result;
    }
console.log(phoneticLookup('charlie'));
//without switch case and if else we create 