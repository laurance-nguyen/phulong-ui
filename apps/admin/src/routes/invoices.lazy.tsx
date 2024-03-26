import Invoices from '@admin/pages/invoices'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/invoices')({
  component: Invoices,
})