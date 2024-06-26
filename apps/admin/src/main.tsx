import 'ui/styles/globals.css'

import { RouterProvider, createRouter } from '@tanstack/react-router'

import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}