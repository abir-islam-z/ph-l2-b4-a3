import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

/* type PropertyToValidate = 'body' | 'query' | 'params'

const validateRequest = (
  schema: AnyZodObject,
  propertyToValidate: PropertyToValidate,
) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync(req[propertyToValidate])

    next()
  }) */

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const data = await schema.parseAsync({
      body: req.body,
      cookies: req.cookies,
    });
    req.body = data.body;

    next();
  });
};

export default validateRequest;
