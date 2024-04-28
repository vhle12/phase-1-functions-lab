const hqLocation = 42
const pickupLocation = 41
const feetPerBlock = 264


function distanceFromHqInBlocks(pickupLocation){
    const distance = Math.abs(pickupLocation - hqLocation);
    return distance
}

function distanceFromHqInFeet(location){
    const blocks = distanceFromHqInBlocks(location);
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}

function calculatesFarePrice(start, destination){
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400){
        return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet <= 2000){ 
        const distanceAfterFree = distanceInFeet - 400;
        const fare = distanceAfterFree * 0.02
        return fare;
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25
    }
    else if (distanceInFeet >= 2500){
        return "cannot travel that far"
    };
}