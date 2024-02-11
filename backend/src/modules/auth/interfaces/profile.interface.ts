export interface Profile {
  displayName: string;
  email: { value: string; verified: boolean };
  photo: string;
}

export interface JwtPayload {
  id: number;
  email: string;
}
