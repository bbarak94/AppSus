export const storageService = {
    loadFromStorage,
    saveToStorage,
    test
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function test(){
    console.log('test from storage service')   
 }