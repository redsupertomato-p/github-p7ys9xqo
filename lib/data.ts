// Types
export interface Agent {
  id: number;
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
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  phoneNumber: string;
  language: string;
  state: string;
}

export interface Meeting {
  id: number;
  title: string;
  date: string;
  agentId: number;
  addressId: number;
}

// Voice options
export const voiceOptions = [
  { id: 'voice1', name: 'Natural Voice 1' },
  { id: 'voice2', name: 'Natural Voice 2' },
  { id: 'voice3', name: 'Professional Voice 1' },
  { id: 'voice4', name: 'Professional Voice 2' },
];

// Mock data
export const agents: Agent[] = [
  {
    id: 1,
    title: "Customer Service Agent",
    prompt: "You are a helpful customer service representative...",
    voice: "Natural Voice 1",
    name: "John Doe",
    address: "123 Main St",
    country: "USA",
    language: "English",
    phoneNumber: "+1 234-567-8901",
    state: "Active",
  },
  {
    id: 2,
    title: "Sales Representative",
    prompt: "You are an experienced sales professional...",
    voice: "Professional Voice 1",
    name: "Jane Smith",
    address: "456 Market St",
    country: "UK",
    language: "English",
    phoneNumber: "+44 20 7123 4567",
    state: "Active",
  },
];

export const addresses: Address[] = [
  {
    id: 1,
    name: "Main Office",
    address: "123 Business Ave",
    city: "New York",
    country: "USA",
    phoneNumber: "+1 212-555-0123",
    language: "English",
    state: "Active",
  },
  {
    id: 2,
    name: "Branch Office",
    address: "456 Commerce St",
    city: "London",
    country: "UK",
    phoneNumber: "+44 20 7123 4567",
    language: "English",
    state: "Active",
  },
];

export const meetings: Meeting[] = [
  {
    id: 1,
    title: "Client Meeting",
    date: "2024-03-20T10:00:00Z",
    agentId: 1,
    addressId: 1,
  },
  {
    id: 2,
    title: "Sales Presentation",
    date: "2024-03-21T14:00:00Z",
    agentId: 2,
    addressId: 2,
  },
];