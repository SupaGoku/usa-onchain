import * as Icons from './icons'

export const Socials = () => {
  return (
    <section className="bg-clearBlack flex w-full flex-row items-center justify-center gap-x-8 pb-12">
      <a className="cursor:pointer h-[50px] w-[50px] hover:text-[#c40c2e]" href="https://t.co/8npD0Li1E9">
        <Icons.Telegram />
      </a>
      <a className="cursor:pointer h-[50px] w-[50px] hover:text-[#c40c2e]" href="https://twitter.com/USA_ON_CHAIN">
        <Icons.X />
      </a>
    </section>
  )
}
