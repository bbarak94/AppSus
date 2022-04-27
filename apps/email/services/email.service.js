import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const EmailService = {
    query
}

const KEY = 'eMails'

function query() {
    let eMails = _loadFromStorage()
    if (!eMails) {
        eMails = _createEmails()
        _saveToStorage(eMails)
    }
    return Promise.resolve(eMails)
}

function _createEmails() {
    const eMails = []
    for (let i = 0; i < 20; i++) {
        eMails.push(_createEmail())
    }
    return eMails
}

function _createEmail() {
    return {
        id: utilService.makeId(),
        subject: utilService.makeLorem(2),
        body: utilService.makeLorem(10),
        isRead: (Math.random() > 0.5) ? true : false,
        sentAt: Date.now(),
        to: (Math.random() > 0.5) ? 'itai.rotstein@gmail.com' : 'momo@momo.com'
    }
}

function _loadFromStorage() {
    storageService.loadFromStorage(KEY)
}

function _saveToStorage(eMails) {
    storageService.saveToStorage(KEY, eMails)
}
