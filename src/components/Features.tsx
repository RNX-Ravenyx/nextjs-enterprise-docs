import React from 'react'

import { Table } from './Table'
import { Heading } from './Heading'

export const Features = () => {
  return (
    <section className="my-16 xl:max-w-none">
      <Heading level={2} id="features">
        Features
      </Heading>
      <div className="mt-4 border-t border-zinc-900/5 pt-10  dark:border-white/5">
        <p className="my-0">
          Here&apos;s a detailed look at the key features included:
        </p>
        <Heading level={3} id="ui-features">
          User Interface and Experience (UI/UX) features
        </Heading>
        <Table type="ui" />

        <Heading level={3} id="technical-features">
          Technical features
        </Heading>
        <Table type="technical" />
      </div>
    </section>
  )
}
