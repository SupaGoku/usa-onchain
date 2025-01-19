import { csx } from '../utils'

export const Dollar = () => {
  return (
    <section className="flex w-full flex-row items-center justify-center gap-x-8 bg-clearBlack pb-12 pt-6">
      <a href="https://capitalism.americancoin.xyz">
        <img
          alt="AMERICA"
          height={500}
          src="/dollar.png"
          width={500}
          className={csx(
            'z-40 w-auto rotate-[8deg]',
            'h-[150px]',
            'md:h-[180px]',
            'cursor-pointer transition duration-150 hover:scale-125 lg:h-[240px]',
          )}
        />
      </a>
    </section>
  )
}
