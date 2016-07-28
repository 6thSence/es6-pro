export const COUNT_OF_USERS = 3;

export const users = ['Anna', 'Alex', 'Kolya'];

export function checkUsers(users, countOfUsers) {
    return users.length === countOfUsers ? true : false;
};