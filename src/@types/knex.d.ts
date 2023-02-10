/* eslint-disable */
import { Knex } from "../database";
import { randomUUID } from 'node:crypto';

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
