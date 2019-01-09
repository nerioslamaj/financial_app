import { transactionsService } from '../index';

export async function findTransactions(payload) {
  try {
    return await transactionsService.find(payload);
  } catch (err) {
    return [];
  }
}

export async function getTransaction(payload) {
  try {
    return await transactionsService.get(payload);
  } catch (err) {
    return {};
  }
}

export async function createTransaction(payload) {
  try {
    return await transactionsService.create(payload);
  } catch (err) {
    return {};
  }
}

export async function modifyTransaction(payload) {
  try {
    return await transactionsService.update(payload._id, {payload});
  } catch (err) {
    return {};
  }
}
