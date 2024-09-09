import { GuestObject } from "@/lib/nobox/record-structures/Guest";

export function getNameByGneder(guest: GuestObject) {
    if (guest.gender === 'male') return 'Brother' + ' ' + guest.firstname;
    if (guest.gender === 'female') return 'Sister' + ' ' + guest.firstname;

}