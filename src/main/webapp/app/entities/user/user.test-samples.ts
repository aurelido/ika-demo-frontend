import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 13741,
  login: 'QujD',
};

export const sampleWithPartialData: IUser = {
  id: 939,
  login: '.AP0~$@ywr60\\YC',
};

export const sampleWithFullData: IUser = {
  id: 12909,
  login: 'N',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
