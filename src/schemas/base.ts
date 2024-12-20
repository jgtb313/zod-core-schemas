import { isString } from 'shared-core-fns'

import { z } from '@/zod'

export const ID = (resourceName: string) =>
  z.string().openapi({
    description: `A unique identifier for each ${resourceName}`,
    example: '2i27UIp5E4Wz6ZI8bfpBcgaRiez'
  })

export const FilterableSchema = (fields: string[], options: { example: string }) =>
  z
    .string()
    .optional()
    .openapi({
      description: `Generic filter that can match against \n ${fields.map((field) => '- '.concat(field)).join('\n')}`,
      example: options.example
    })

export const BooleanSchema = z
  .boolean()
  .or(z.string())
  .default(false)
  .transform((value) => (isString(value) ? value === 'true' : value))
