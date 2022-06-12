import { AppError } from '~/shared/erros/AppError';
import { Request, Response, NextFunction } from 'express';

export async function errorHandle(err: Error, request: Request, response: Response, next: NextFunction): Promise<Response> {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: `internal server error - ${err.message}`,
  });
}
