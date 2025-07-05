import { Button } from '@nuicoder/neko-ui/components/button'
import Image from 'next/image'
import { ThemeToggle } from './button-theme'

export default function Header() {
  return (
    <header className="fixed w-full top-0 flex items-center justify-between px-10 h-[50px] drop-shadow-xl border-b-1 border-[--border] bg-[--background] z-50">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Image alt="logo" src="/favicon.svg" width={26} height={26} />
        </Button>
        <Button variant="ghost">Docs</Button>
        <Button variant="ghost">Components</Button>
        <Button variant="ghost">Themes</Button>
        <Button variant="ghost">Colors</Button>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  )
}
