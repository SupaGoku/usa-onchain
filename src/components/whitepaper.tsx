import { csx } from '../utils'

export const Whitepaper = () => {
  return (
    <section
      className={csx(
        'flex flex-row items-center justify-center gap-x-8 p-8 md:p-12',
        'bg-clearBlack border-clearWhite border-b border-t',
      )}
    >
      <a
        className="cursor:pointer text-xl font-bold uppercase hover:text-[#c40c2e] md:text-3xl"
        href="/whitepaper.pdf"
        target="_blank"
      >
        Read Our Whitepaper
      </a>
    </section>
  )
}
