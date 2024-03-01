import { cssBundleHref } from '@remix-run/css-bundle';
import stylesheet from '~/tailwind.css';
import type { LinksFunction } from '@remix-run/node';
import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from '@remix-run/react';

export const links: LinksFunction = () => [
   ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
   { rel: 'stylesheet', href: stylesheet },
   { rel: 'icon', href: '/favicon.ico' },
];

export default function App() {
   return (
      <html lang="en" className="h-full bg-neutral-50 antialiased">
         <head>
            <meta charSet="utf-8" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <Meta />
            <Links />
         </head>
         <body className="flex h-full flex-col">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
         </body>
      </html>
   );
}
