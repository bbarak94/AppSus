import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const EmailService = {
    query,
    getById,
}

const KEY = 'eMails'

function query(filterBy) {
    let eMails = _loadFromStorage(KEY)
    if (!eMails) {
        eMails = _createEmails()
        _saveToStorage(eMails)
    }

    if (filterBy) {
        let { txt } = filterBy
        eMails = eMails.filter(eMail =>
            eMail.body.toLowerCase().includes(txt.toLowerCase())
        )
    }
    return Promise.resolve(eMails)
}

function getById(eMailId) {
    const eMails = _loadFromStorage(KEY)
    const eMail = eMails.find(eMail => eMail.id === eMailId)
    return Promise.resolve(eMail)
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
        sentAt: new Intl.DateTimeFormat('en-US').format(Date.now()),
        to: (Math.random() > 0.5) ? 'itai.rotstein@gmail.com' : 'momo@momo.com'
    }
}

function _loadFromStorage(KEY) {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(eMails) {
    storageService.saveToStorage(KEY, eMails)
}
