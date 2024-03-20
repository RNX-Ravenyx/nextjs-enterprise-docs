import { Button } from './Button'

// Data structure for project structure details
const projectStructure = [
  {
    category: 'folders',
    items: [
      {
        name: '.github',
        description:
          'Contains GitHub-related configurations, including CI/CD workflows and issue templates.',
      },
      {
        name: '.storybook',
        description:
          'Configuration files for Storybook, facilitating UI component development and testing.',
      },
      {
        name: 'app',
        description:
          'Holds the main application logic, including routing and core components.',
      },
      {
        name: 'components',
        description: 'Reusable UI components used throughout the application.',
      },
      {
        name: 'e2e',
        description:
          'End-to-end tests using Playwright, ensuring application integrity from a user perspective.',
      },
      {
        name: 'public',
        description:
          'Static files such as images, fonts, and `robots.txt`, accessible by the web server.',
      },
      {
        name: 'styles',
        description: 'Global stylesheets and Tailwind CSS configuration files.',
      },
    ],
  },
  {
    category: 'files',
    items: [
      {
        name: '.all-contributorsrc',
        description:
          'Configuration for the All Contributors bot, recognizing project contributors.',
      },
      {
        name: '.eslintignore',
        description: 'Specifies files and folders that ESLint should ignore.',
      },
      {
        name: '.eslintrc',
        description:
          'Configuration for ESLint to enforce coding style and standards.',
      },
      {
        name: '.gitignore',
        description:
          'Specifies intentionally untracked files to ignore in Git operations.',
      },
      {
        name: '.pre-commit-config.yaml',
        description:
          'Configuration for pre-commit hooks to enforce code quality checks before committing.',
      },
      {
        name: '.prettierignore',
        description: 'Specifies files that Prettier should ignore.',
      },
      {
        name: '.prettierrc',
        description:
          'Configuration for Prettier, an opinionated code formatter.',
      },
      {
        name: '.releaserc',
        description:
          'Configuration for automated version management and package publishing.',
      },
      {
        name: 'env.mjs',
        description: 'Module script for managing environment variables.',
      },
      {
        name: 'git-conventional-commits.yaml',
        description:
          'Configuration for enforcing conventional commit messages.',
      },
      {
        name: 'graph.svg',
        description:
          'SVG graph representing some aspect of the project structure or dependencies.',
      },
      {
        name: 'instrumentation.ts',
        description:
          'TypeScript file for application monitoring and performance instrumentation.',
      },
      {
        name: 'jest.config.js',
        description: 'Configuration for Jest, a JavaScript testing framework.',
      },
      {
        name: 'jest.setup.js',
        description: 'Setup file executed before each Jest test suite.',
      },
      {
        name: 'LICENSE',
        description:
          'The license file specifying how the project can be used or distributed.',
      },
      {
        name: 'lp-items.tsx',
        description:
          'React component file, potentially for landing page items or similar.',
      },
      {
        name: 'middleware.js',
        description:
          'Middleware configuration for Next.js or other server-side logic.',
      },
      {
        name: 'next-env.d.ts',
        description: 'TypeScript declaration file for Next.js types.',
      },
      {
        name: 'next.config.mjs',
        description: 'ES Module configuration file for Next.js.',
      },
      {
        name: 'package-lock.json',
        description:
          'Automatically generated file for any operations where npm modifies either the node_modules tree, or package.json.',
      },
      {
        name: 'package.json',
        description:
          'Defines npm package dependencies, scripts, and project metadata.',
      },
      {
        name: 'playwright.config.ts',
        description:
          'Configuration file for Playwright, an end-to-end testing framework.',
      },
      {
        name: 'postcss.config.js',
        description:
          'Configuration file for PostCSS, a tool for transforming CSS with JavaScript.',
      },
      {
        name: 'README.md',
        description:
          'The project’s README file with introductory information about the project.',
      },
      {
        name: 'renovate.json',
        description:
          'Configuration file for Renovate, a tool to automate dependency updates.',
      },
      {
        name: 'report-bundle-size.js',
        description:
          'JavaScript utility script for reporting the size of Webpack bundles.',
      },
      {
        name: 'reset.d.ts',
        description:
          'TypeScript declaration file, potentially for CSS resets or similar.',
      },
      {
        name: 'tailwind.config.js',
        description: 'Tailwind CSS configuration for styling the application.',
      },
      {
        name: 'tsconfig.json',
        description:
          'TypeScript compiler configuration for specifying root files and compiler options.',
      },
    ],
  },
  {
    category: 'app-folder',
    items: [
      {
        name: '[lng]',
        description:
          'Contains API route handlers, enabling server-side processing of requests and data management.',
      },
      {
        name: 'api',
        description:
          'Contains API route handlers, enabling server-side processing of requests and data management.',
      },
      {
        name: 'i18n',
        description:
          'Contains internationalization configurations and client-side setup for multi-language support.',
      },
    ],
  },
  {
    category: 'i18n',
    items: [
      {
        name: 'i18n',
        description:
          'Contains internationalization configurations and client-side setup for multi-language support.',
      },
      {
        name: 'i18n/locales',
        description:
          'Holds the translation files for supported languages, organized by locale codes.',
      },
      {
        name: 'i18n/locales/de, en, bg',
        description:
          'Translation files for German, English, and Bulgarian, providing localized text for the UI.',
      },
      {
        name: 'i18n/client.js',
        description:
          'Client-side initialization for the i18n framework, setting up language detection and switching.',
      },
      {
        name: 'i18n/index.js',
        description:
          'Main entry point for i18n configurations, aggregating and exporting setup for server and client sides.',
      },
      {
        name: 'i18n/settings.ts',
        description:
          'TypeScript file containing settings for i18n, such as default language and formatting options.',
      },
    ],
  },
  {
    category: 'api',
    items: [
      {
        name: 'api',
        description:
          'Contains API route handlers, enabling server-side processing of requests and data management.',
      },
      {
        name: 'api/health',
        description:
          "Health check endpoint for monitoring the application's status and ensuring its operational integrity.",
      },
      {
        name: 'api/health/route.ts',
        description:
          'Defines the health check API route, returning server status and uptime information.',
      },
    ],
  },
]

export const ProjectStructureTable = ({
  type,
}: {
  type: 'files' | 'folders' | 'app-folder' | 'i18n'
}) => {
  const items = projectStructure.find((section) => section.category === type)
    ?.items

  return (
    <div>
      <div className="flow-root">
        <div className="-mx-4 -my-6 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                {items?.map((item) => (
                  <tr key={item.name}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-0">
                      <Button
                        // href="#"
                        variant="text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.name}
                      </Button>
                    </td>
                    <td className="px-8 py-4 text-sm ">{item.description}</td>
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
