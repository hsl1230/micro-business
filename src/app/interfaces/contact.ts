export interface Contact {
  phoneNumber: string;
  tel: string;
  email: string;
  addresses: Address[];
}

export interface Address {
  name: string;
  street: string;
  city: string;
  province: string;
  country: string;
  postCode: string;
}
