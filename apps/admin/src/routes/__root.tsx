import { Outlet, createRootRoute } from '@tanstack/react-router'

import Header from '@admin/components/header'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})