import { csx } from '../utils'

export const Button = ({ url, children }: { url: string; children: React.ReactNode }) => {
  return (
    <a
      className={csx('rounded bg-[#c40c2e] px-8 py-4 text-lg font-bold tracking-wider md:text-2xl')}
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}
