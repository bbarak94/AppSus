import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const EmailService = {
    query,
    getById,
    addEmail,
    setIsRead,
    setIsStarred,
}

const gLoggedinUser = {
    email: 'itai.rotstein@gmail.com',
    fullname: 'Mahatma Appsus'
}

const KEY = 'eMails'

function query(filterBy) {
    let eMails = _loadFromStorage(KEY)
    if (!eMails) {
        eMails = _createEmails()
        _saveToStorage(eMails)
    }

    if (filterBy) {
        if (filterBy.txt) {
            let { txt, isRead } = filterBy
            eMails = eMails.filter(eMail =>
                eMail.body.toLowerCase().includes(txt.toLowerCase()) &&
                eMail.isRead.toString() === isRead
            )
        } else if (filterBy.status) {
            switch (filterBy.status) {
                case 'inbox':
                    eMails = eMails.filter(email => email.to === gLoggedinUser.email)
                    break
                case 'sent':
                    eMails = eMails.filter(email => email.to !== gLoggedinUser.email)
                    break
                case 'starred':
                    eMails = eMails.filter(email => email.isStarred)
            }
        }
    }
    return Promise.resolve(eMails)
}

function getById(eMailId) {
    const eMails = _loadFromStorage(KEY)
    const eMail = eMails.find(eMail => eMail.id === eMailId)
    return Promise.resolve(eMail)
}

function addEmail(eMail) {
    let eMails = _loadFromStorage()
    const newEmail = _createEmail(eMail.to, eMail.subject, eMail.body)
    eMails = [newEmail, ...eMails]
    _saveToStorage(eMails)
    return Promise.resolve()
}

function setIsRead(eMailId) {
    const eMails = _loadFromStorage()
    let eMail = eMails.find(eMail => eMail.id === eMailId)
    eMail.isRead = true
    _saveToStorage(eMails)
}

function setIsStarred(eMailId) {
    const eMails = _loadFromStorage()
    let eMail = eMails.find(eMail => eMail.id === eMailId)
    eMail.isStarred = !eMail.isStarred
    _saveToStorage(eMails)
    return Promise.resolve()
}

function _createEmails() {
    const eMails = []
    for (let i = 0; i < 20; i++) {
        eMails.push(_createEmail())
    }
    return eMails
}

function _createEmail(to, subject, body) {
    return {
        id: utilService.makeId(),
        subject: subject || utilService.makeLorem(2),
        body: body || utilService.makeLorem(10),
        isRead: false,
        isStarred: false,
        sentAt: new Intl.DateTimeFormat('en-US').format(Date.now()),
        to: to || ((Math.random() > 0.5) ? 'itai.rotstein@gmail.com' : 'momo@momo.com')
    }
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(eMails) {
    storageService.saveToStorage(KEY, eMails)
}
