import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = 'My Projects'
const description =
  'Over the years, I have been working on various small projects. Here is a collection of projects that I think are pretty good, and they are also the best testimony to my attempts and explorations in the technology field.'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          My Project Adventure Journey.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Over the years, I have been working on various small projects, some <b>open source</b>, some <b>experimental</b>, and some <b>just for fun</b>. Below is a collection of projects that I think are pretty good, and they are also the best testimony to my attempts and explorations in the technology field.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
