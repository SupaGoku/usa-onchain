export const csx = (...cs: string[]) => cs.filter((c) => Boolean(c)).join(' ')
