export {};

declare global {
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  }
}