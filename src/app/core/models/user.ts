export interface User {
  id: number;
  email: string;
  isAdmin: boolean;
  authJwtToken: string;
}
