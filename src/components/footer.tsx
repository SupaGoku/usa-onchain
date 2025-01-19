export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-y-2 px-8 pb-8 pt-8 text-xs md:pt-16 md:text-sm">
      <div className="text-center">American Coin ($USA) has no affiliation with the United States government.</div>
      <div>© 2025 American Coin $USA. All rights reserved.</div>
      <div>
        Video content by{' '}
        <a className="text-[#c40c2e] underline hover:no-underline" href="https://www.youtube.com/@callsignrice1785">
          CallsignRice
        </a>
        .
      </div>
    </footer>
  )
}
