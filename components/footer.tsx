const footerLinks = ["Privacy", "Terms", "Contact"];
const socials = ["X", "In", "Ig"];

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[1.75rem] border border-white/8 bg-white/[0.03] px-6 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-medium tracking-[0.24em] text-white/75">TinyWins</div>
        <div className="flex flex-wrap items-center gap-5">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-white">
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {socials.map((item) => (
            <a
              key={item}
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/20 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
