import { Button } from './Button'

const features = [
  {
    name: 'Next.js',
    description: () => (
      <span>
        The Next.js app router is engineered to leverage the full spectrum of
        routing capabilities provided by Next.js, offering seamless navigation
        within your application. It includes support for file-system-based
        routes, dynamic routing, and catch-all routes, along with optimized
        loading states and automatic error handling. This integration ensures a
        robust and intuitive routing system, enhancing both developer experience
        and application performance.
      </span>
    ),
    href: 'https://nextjs.org/docs',
  },
  {
    name: 'Tailwind CSS',
    description: () => (
      <span>
        Tailwind CSS integration streamlines UI development by providing a
        utility-first CSS framework that enables rapid, responsive design with
        minimal custom CSS. This approach ensures a highly customizable and
        maintainable codebase, optimizing both development speed and design
        consistency.
      </span>
    ),
    href: 'https://tailwindcss.com/docs/installation',
  },
  {
    name: 'Typescript',
    description: () => (
      <span>
        Leveraging Extremely strict TypeScript and the{' '}
        <Button
          href="https://www.totaltypescript.com/ts-reset"
          variant="text"
          rel="noopener noreferrer"
          target="_blank"
        >
          <code>ts-reset</code>
        </Button>{' '}
        library, our software achieves unparalleled type safety, ensuring your
        code is both robust and secure, setting a new standard for reliability
        in development.
      </span>
    ),
    href: 'https://www.typescriptlang.org/docs/',
  },
]

export const Table = () => {
  return (
    <div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    className="px-8 text-left text-sm font-semibold "
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature) => (
                  <tr key={feature.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-0">
                      <Button
                        href={feature.href}
                        variant="text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {feature.name}
                      </Button>
                    </td>
                    <td className="px-8 py-4 text-sm ">
                      {feature.description()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
