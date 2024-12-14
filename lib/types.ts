export interface Agent {
  id: string;
  title: string;
  prompt: string;
  voice: string;
  name: string;
  address: string;
  country: string;
  language: string;
  phoneNumber: string;
  state: string;
}

export interface Address {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phoneNumber: string;
  language: string;
  state: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  agentId: string;
  addressId: string;
}