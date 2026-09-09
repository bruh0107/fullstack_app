import type { NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

export function LoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`${req.method} ${req.url}`);
  next();
}
