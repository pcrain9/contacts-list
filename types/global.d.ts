declare global {
  interface User {
    id: number | string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  }
}

export {};
