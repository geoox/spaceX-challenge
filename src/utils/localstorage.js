export const favLaunchesArrayKey = 'fav-launches-key';
export const favLaunchpadsArrayKey = 'fav-launchpads-key';

export const saveItem = (key, object) => {
    var itemsArr = JSON.parse(localStorage.getItem(key) || "[]");
    itemsArr.push(object);
    localStorage.setItem(key, JSON.stringify(itemsArr));
}

export const deleteItem = (key, object) => {
    var itemsArr = JSON.parse(localStorage.getItem(key) || "[]");
    var index = -1;
    if(key === favLaunchesArrayKey){
        index = itemsArr.findIndex(item => item['flight_number'] === object['flight_number']);
    } else if(key === favLaunchpadsArrayKey){
        index = itemsArr.findIndex(item => item['id'] === object['id']);
    }
    itemsArr.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(itemsArr));
}

export const getItems = (key) => {
    return JSON.parse(localStorage.getItem(key) || "[]");
}

// return true if item exists in ls
export const existsItem = (key, object) => {
    var itemsArr = JSON.parse(localStorage.getItem(key) || "[]");
    // when functionalities are expanded, check against unique key in that arr
    if(key === favLaunchesArrayKey){
        return itemsArr.findIndex(item => item['flight_number'] === object['flight_number']) !== -1
    } else if(key === favLaunchpadsArrayKey){
        return itemsArr.findIndex(item => item['id'] === object['id']) !== -1
    }
    return false;
}

