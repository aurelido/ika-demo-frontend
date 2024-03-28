import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7528601d-faec-4344-80a5-3c01b50bd8d6',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e74e8e66-5121-4258-9d56-f2ba8c776710',
};

export const sampleWithFullData: IAuthority = {
  name: '97234e97-ef3d-4171-9a26-4c75260ecd2d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
