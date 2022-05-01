import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const EmailService = {
    query,
    getById,
    addEmail,
    setIsRead,
    setIsStarred,
    getLength,
    removeEmail,
}

const gLoggedinUser = {
    email: 'itai.rotstein@gmail.com',
    fullname: 'Itai Rotstein'
}

const KEY = 'eMails'

let gEmails = [
    {
        id: utilService.makeId(),
        subject: 'Long time not talk!!! how is it going mannn???',
        body: 'Mother and Father have definitely been turned down for Barneveld1; we heard the news yesterday. They were also told to be ready to leave here on next Tuesday',
        isRead: true,
        isStarred: false,
        sentAt: '03-07-2021',
        to: 'itai.rotstein@gmail.com',
        from: '<momo1232@gmail.com>'
    },
    {
        id: utilService.makeId(),
        subject: 'Your plane tickets to Hawai!! have a nice vacation :)',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus nisi ducimus porro, ex consectetur excepturi tempora facilis amet, ad, blanditiis quae adipisci voluptatem sint, ex consectetur excepturi tempora facilis amet, ad, blanditiis quae adipisci voluptatem sint.',
        isRead: false,
        isStarred: false,
        sentAt: '19-02-2020',
        to: 'itai.rotstein@gmail.com',
        from: '<booking@booking.com>'
    },
    {
        id: utilService.makeId(),
        subject: 'The reason why most people are afraid of snakes',
        body: 'I have a good friend here. Last week he was told to keep himself in readiness for transport. When I went to see him, he stood straight as an arrow, face calm, rucksack packed beside his bed. We didnt mention his leaving, but he did read me various things he had written, and we talked a little philosophy. ',
        isRead: true,
        isStarred: false,
        sentAt: '01-09-2021',
        to: 'itai.rotstein@gmail.com',
        from: '<discovery@channel.co.il>'  
    },
    {
        id: utilService.makeId(),
        subject: 'Kibutz Hanita bills and depos',
        body: 'This is something people refuse to admit to themselves: at a given point you can no longer do, but can only be and accept.',
        isRead: false,
        isStarred: true,
        sentAt: '03-03-2022',
        to: 'itai.rotstein@gmail.com',
        from: '<kibutz@hanita.com>'  
    },
    {
        id: utilService.makeId(),
        subject: 'Rental cars offers: Rent our cars today! big discounts for coders',
        body: 'Ten thousand have passed through this place, the clothed and the naked, the old and the young, the sick and the healthy—and I am left to live and work and stay cheerful. It will be my parents turn to leave soon, if by some miracle not this week, then certainly one of the next. ',
        isRead: false,
        isStarred: false,
        sentAt: '21-09-2021',
        to: 'itai.rotstein@gmail.com',
        from: '<rental@cars.net>'  
    },
    {
        id: utilService.makeId(),
        subject: 'Discover Portugal newsletter',
        body: 'Etty spent much of the time eloquently describing her experience in diaries and letters, many of which she passed to Maria Tuinzing (the recipient of this particular missive) before her departure from Westerbork. Her final note, written to a family friend, was thrown from the train and found by a farmer who sent it on.',
        isRead: false,
        isStarred: false,
        sentAt: '15-09-2021',
        to: 'itai.rotstein@gmail.com',
        from: '<discovery@channel.com>'  
    },
    {
        id: utilService.makeId(),
        subject: 'Itai, Parpar Nehmad season 32 is now on netflix!',
        body: 'It was in 1915, aged thirty-seven, that British poet and writer Edward Thomas joined the British Army—a decision prompted, in part, by The Road Not Taken, a poem by his close friend Robert Frost that had in fact been inspired by Thomas, a person who, Frost later said, “whichever road he went, would be sorry he didnt go the other.',
        isRead: true,
        isStarred: true,
        sentAt: '15-09-2021',
        to: 'itai.rotstein@gmail.com',
        from: '<netflix@channel.net>' 
    },
    {
        id: utilService.makeId(),
        subject: 'Hello there at Coding Academy, I would like to sign up please.',
        body: 'People have been praised for self-possession in danger. I have heard Edward doubt if he was as brave as the bravest. But who was ever so completely himself right up to the verge of destruction, so sure of his thought, so sure of his word? He was the bravest and best and dearest man you and I have ever known. I knew from the moment when I first met him at his unhappiest that he would some day clear his mind and save his life. I have had four wonderful years with him. I know he has done this all for you: he is all yours. But you must let me cry my cry for him as if he were almost all mine too.',
        isRead: true,
        isStarred: false,
        sentAt: '11-01-2022',
        to: '<coding@academy.com>',
        from: 'itai.rotstein@gmail.com' 
    },
    {
        id: utilService.makeId(),
        subject: 'Hello my love, I miss you, how is Sri-Lanka',
        body: 'Of the three ways out of here, by death where there is no choice, by death where there is a noble choice, and by death where there is a choice not so noble, he found the greatest way. There is no regret—nothing that I will call a regret. Only I cant help wishing he could have saved his life without so wholly losing it and come back from France not too much hurt to enjoy our pride in him',
        isRead: false,
        isStarred: false,
        sentAt: '28-04-2022',
        to: '<nisan.rotstein@gmail.com>',
        from: 'itai.rotstein@gmail.com' 
    },
    {
        id: utilService.makeId(),
        subject: 'We are leaving the kibutz, please unregister our number from the kolbo',
        body: 'It was beautiful as he did it. And I dont suppose there is anything for us to do to show our admiration but to love him forever.',
        isRead: false,
        isStarred: true,
        sentAt: '12-04-2020',
        to: '<kibutz@hanita.com>',
        from: 'itai.rotstein@gmail.com' 
    },
]

_saveToStorage(gEmails)

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
                eMail.body.toLowerCase().includes(txt.toLowerCase())
            )
            if (isRead !== null && isRead !== 'All') {
                eMails = eMails.filter(eMail =>
                    eMail.isRead.toString() === isRead
                )
            }
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

function removeEmail(eMailId) {
    let eMails = _loadFromStorage()
    const eMailIdx = eMails.findIndex(eMail => eMail.id === eMailId)
    eMails.splice(eMailIdx, 1)
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

function getLength() {
    const eMails = _loadFromStorage()
    return Promise.resolve(eMails.length)
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
