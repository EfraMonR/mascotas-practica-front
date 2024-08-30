export interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: number;
  owner: string;
  creationDate?: Date;
  modificationDate?: Date;
  creationUser?: string;
  modificationUser?: string;
  selected?: boolean;
}
