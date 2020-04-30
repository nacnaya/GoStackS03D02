import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const { affected } = await transactionRepository.delete(id);

    if (!affected) {
      throw new AppError('Transaction not found', 400);
    }
  }
}

export default DeleteTransactionService;
