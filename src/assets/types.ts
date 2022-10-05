export enum Gender {
    man = 'man',
    woman = 'woman',
    other = 'other',
}


export interface IContact {
    id: string;
    name: string;
    gender: Gender;
    mobile: number;
    email: string;
    company: string;
}