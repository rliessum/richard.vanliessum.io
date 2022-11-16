import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Richard van Liessum</title>
        <meta
          name="description"
          content="I’ve spoken at some events."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at a couple of events."
        intro="I like to share my knowledge and lessons learned is live on stage, where there’s so much more communication bandwidth than there is in writing."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="#"
              title="Lessons learned from developing network automation tools"
              description="I’ll be talking about the lessons I learned while developing network automation tools, and how I applied them to my current role."
              event="Internal company conference"
              cta="Watch the recording"
            />
            <Appearance
              href="#"
              title="How to create Twelve-Factor Apps to make your life easier"
              description="I’ll be talking about the approach and lessons from developing a tool that consolidate data from several sources, and process and present them using modern software development practises."
              event="Internal company conference"
              cta="Watch the recording"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
