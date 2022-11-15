import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Richard van Liessum</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 32GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads. The battery is a dream.
            </Tool>
            <Tool title="LG Ultrafine 5K Display">
              Great 5K display supporting my Mac to the fulles with HiDPI support.
            </Tool>
            <Tool title="Keychron Q1 QMK">
              Great keyboard, red switches and a nice compact layout. QMK makes it adjustable to your liking.
            </Tool>
            <Tool title="Logitech MX Master 3">
              Love the scroll wheel and the ability to switch between multiple devices.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Notion">
              Notion is a great tool for keeping track of all kinds of things. I use it for my personal wiki, my todo list, and my notes.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              I love to work with Visual Studio Code. It's a very versatile developing environment.
            </Tool>
            <Tool title="iTerm2">
              At this point it's just a habit. I've been using it for so long.
            </Tool>
            <Tool title="Tower">
              Sometimes you just want to branch out from the command line and solve your git problems in a GUI.
            </Tool>
            <Tool title="SQL Pro">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Sketch">
              I use Sketch for all my design work. It's a great tool.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
