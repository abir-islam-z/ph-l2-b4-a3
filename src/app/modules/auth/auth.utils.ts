import jwt from 'jsonwebtoken';
import { TJwtPayload } from './auth.interface';

export const createToken = (payload: TJwtPayload) => {
  return jwt.sign(payload.jwtPayload, payload.secret, {
    expiresIn: payload.expiresIn,
  });
};
