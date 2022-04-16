function setUpEvents(){
    let survival = prompt ("Are you ready to survive and kick some zombie butt (yes or no)?")
if (survival == "yes"){
    let items = ["bottle of water", "cricket bat", "pocket knife", "rope", "snickers bar", "a small collection of 45 records","a machete", "first aid kit", "Vodka"]
    let goodItems = ["bottle of water", "a machete", "first aid kit", "pocket knife","cricket bat"]
    let whichItem = prompt (`What three items would you like to take with you on your journey? (${items.join(",")})`)
    const whichItemArray = whichItem.split (", ")
    if (goodItems.includes(whichItemArray[0]) && goodItems.includes(whichItemArray[1]) && goodItems.includes(whichItemArray[2])){
        alert(`Great choice, you are on your way to survive another day! You've got red on you!`)
    }
    else{
        alert(`You only two out of three items to ensure your survival, and were bitten by a zombie. You will now join the army of the undead and be doomed to a diet of brains.`)
    }
}else{
    alert(`You chose to walk the earth forever in search of brains!`)
}
}
window.onload = function(){
    setUpEvents();
}



