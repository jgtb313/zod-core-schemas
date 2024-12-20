import { z } from '@/zod'

export const CreatedAtSchema = z.coerce.date()

export const UpdatedAtSchema = z.coerce.date()

export const DeletedAtSchema = z
  .date()
  .nullish()
  .transform((value) => (value === undefined ? null : value))
