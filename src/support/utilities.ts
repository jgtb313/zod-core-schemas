type Option<T, K> = { label: string; value: T; disabled?: boolean; tooltip?: string; metadata?: K }

export const createEnumOptions = <T extends string, K = any>(options: Option<T, K>[]) => {
  return {
    schema: options.reduce((state, { label, value }) => ({ ...state, [value]: label }), {}) as Record<T, string>,
    options: options.filter((option) => option.value !== 'DELETED')
  }
}
