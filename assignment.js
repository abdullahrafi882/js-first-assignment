//Feet ToMile
function feetToMile(feet) {
    let mile = feet * 0.00018939;
    return mile;
}






//Wood Calculator
function woodCalculator(chair, table, bed) {
    let chairCount = chair * 1;
    let tableCount = table * 3;
    let bedCount = bed * 5;
    let totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}



//Brick Calculator
function brickCalculator(buildingHeight) {
    if (buildingHeight <= 10) {
        let totalBrick = buildingHeight * 15 * 1000;
        return totalBrick;
    } else if (buildingHeight > 10 && buildingHeight <= 20) {
        let oneToTen = 10 * 15 * 1000;
        let extraHight = buildingHeight - 10;
        let extraBricks = extraHight * 12 * 1000;
        let totalBrick = extraBricks + oneToTen;
        return totalBrick;
    } else if (buildingHeight > 20) {
        let oneToTen = 10 * 15 * 1000;
        let elevenToTwenty = 10 * 12 * 1000;
        let extraHight = buildingHeight - 20;
        let extraBricks = extraHight * 10 * 1000;
        let totalBrick = extraBricks + oneToTen + elevenToTwenty;
        return totalBrick;
    }
}



//Tiny Friend
function tinyFriend(name) {
    let smallestName = name[0];
    for (let i = 0; i < name.length; i++) {
        let newName = name[i];
        if (newName.length < smallestName.length) {
            smallestName = newName;
        }
    }
    return smallestName;
}