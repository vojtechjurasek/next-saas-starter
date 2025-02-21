import { HeroForm } from '@/components/form'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import * as m from '@/paraglide/messages'

const Home = () => {
  return (
    <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:top-1/2 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <h1 className="mb-1 text-3xl leading-tight font-extrabold tracking-tighter md:text-4xl">
        {m.nextjs_starter_template_headline()}
      </h1>
      <p className="max-w-2xl text-muted-foreground">
        {m.nextjs_starter_template_description()}
      </p>
      <div className="mt-1">
        <HeroForm />
      </div>
      <div className="mt-2 flex gap-4">
        <Button asChild>
          <a
            href="https://github.com/vojtechjurasek/next-saas-starter/blob/main/README.md#getting-started"
            target="_blank"
          >
            {m.get_started()}
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://github.com/vojtechjurasek/next-saas-starter"
            target="_blank"
          >
            <Icons.github className="mr-2 size-4" /> {m.github()}
          </a>
        </Button>
      </div>
    </section>
  )
}

export default Home
