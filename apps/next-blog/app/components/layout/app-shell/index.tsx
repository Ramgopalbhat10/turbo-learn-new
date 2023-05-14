'use client'
import { AppShell as MAppShell } from '@mantine/core'
import { HeaderResponsive } from '../header'
import NavLinks from '~app/data/navLinks.json'

export function AppShell({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <MAppShell
      styles={{
        main: {
          paddingTop: 0
        }
      }} 
      header={<HeaderResponsive 
      links={NavLinks.links}
    />}>
      {children}
    </MAppShell>
  )
}