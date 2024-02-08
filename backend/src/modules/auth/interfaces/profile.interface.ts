export interface Profile {
  id: number;
  displayName: string;
  email: { value: string; verified: boolean };
  photo: string;
}
