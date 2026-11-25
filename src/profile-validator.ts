type Setting = {
    notifications?: boolean;
}

type User = {
    id: number;
    username: string;
    settings?: Setting;
}

function isNotified(user: User): boolean {
    let notification = user.settings?.notifications ?? false;

    return notification;
}

let user1: User = {
    id: 1,
    username: "waltertaya",
    settings: {notifications: true},
}

let user2: User = {
    id: 2,
    username: "taya",
}

let user3: User = {
    id: 3,
    username: "waltertaya",
    settings: {},
}

console.log(isNotified(user1));
console.log(isNotified(user2));
console.log(isNotified(user3));
