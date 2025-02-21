import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <footer className="absolute bottom-2 w-full text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} By{' '}
      <Button variant="link" className="p-0" asChild>
        <a href="https://vojtechjurasekcz/">Vojtech Jurasek</a>
      </Button>
    </footer>
  )
}
