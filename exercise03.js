function countOccurances(array) {

    if (!Array.isArray(array))
        throw new Error('invalid Input');

    return array.reduce((pValue, cValue) => {
        let occ = (pValue == cValue) ? 1 : 0
        return occ + pValue;
    })

}

try {
    const occ = countOccurances([1, 2, 3, 1, 4, 5]);
    console.log(occ);
} catch (error) {
    console.log(error);
}