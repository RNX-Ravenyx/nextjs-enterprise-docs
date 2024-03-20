import { Button } from './Button'

const technicalFeatures = [
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
    href: 'https://nextjs.org/',
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
    href: 'https://tailwindcss.com/',
  },
  {
    name: 'Typescript',
    description: () => (
      <span>
        Leveraging Extremely strict TypeScript and the{' '}
        <Button
          href="https://github.com/total-typescript/ts-reset"
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
    href: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Progressive Web Application (PWA)',
    description: () => (
      <span>
        Leverages PWA technology to ensure optimal performance, reliability, and
        integration with device capabilities. This includes service workers for
        offline functionality, manifest files for home screen installation, and
        strategies for efficient caching and content updating.
      </span>
    ),
    href: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps',
  },

  {
    name: 'ESlint',
    description: () => (
      <span>
        ESlint ensures your codebase remains clean and consistent, leveraging a
        comprehensive set of linting rules tailored for Next.js projects to
        catch errors, enforce coding standards, and prevent common pitfalls in
        real-time.
      </span>
    ),
    href: 'https://eslint.org/',
  },
  {
    name: 'Prettier',
    description: () => (
      <span>
        Prettier ensures your code is consistently formatted and readable,
        supporting a wide range of languages and styles. It automates formatting
        to align with best practices, reducing the time spent on styling code
        manually.
      </span>
    ),
    href: 'https://prettier.io/',
  },
  {
    name: 'GitHub Actions',
    description: () => (
      <span>
        Pre-configured GitHub Actions automate your workflows, from simple CI/CD
        pipelines to complex workflows, directly within GitHub&apos;s ecosystem.
        This feature streamlines software development practices by enabling
        automatic testing, building, and deployment.
      </span>
    ),
    href: 'https://github.com/features/actions',
  },
  {
    name: 'Bundle Analyzer Plugin',
    description: () => (
      <span>
        The Bundle Analyzer Plugin provides a visual representation of the size
        of webpack output files, helping identify and eliminate unnecessary
        dependencies. It&apos;s an essential tool for optimizing app performance
        and load times.
      </span>
    ),
    href: 'https://www.npmjs.com/package/@next/bundle-analyzer',
  },
  {
    name: 'Jest',
    description: () => (
      <span>
        Jest offers a delightful testing framework with a focus on simplicity.
        It supports fast parallel testing, snapshots, and interactive watch
        modes, making it ideal for unit and integration testing.
      </span>
    ),
    href: 'https://jestjs.io/',
  },
  {
    name: 'React Testing Library',
    description: () => (
      <span>
        React Testing Library facilitates testing React components in a manner
        that simulates user interactions more closely. It encourages better
        testing practices by focusing on the behavior of your application from
        the user&apos;s perspective.
      </span>
    ),
    href: 'https://testing-library.com/react',
  },
  {
    name: 'Playwright',
    description: () => (
      <span>
        Enables automated, reliable browser testing across all modern browsers,
        providing a robust platform for end-to-end testing that ensures your
        application works flawlessly for every user.
      </span>
    ),
    href: 'https://playwright.dev/',
  },
  {
    name: 'Storybook',
    description: () => (
      <span>
        A sandbox for developing and isolating UI components, allowing you to
        build and test components independently to ensure consistency and
        usability throughout your application.
      </span>
    ),
    href: 'https://storybook.js.org/',
  },
  {
    name: 'Conventional Commits Git Hook',
    description: () => (
      <span>
        Enforces a standardized commit message format, facilitating automated
        semantic versioning and changelog generation to streamline your
        development workflow.
      </span>
    ),
    href: 'https://www.conventionalcommits.org/',
  },
  {
    name: 'Open Telemetry Observability',
    description: () => (
      <span>
        Integrates comprehensive observability into your application, allowing
        you to monitor, trace, and debug your applications with ease, ensuring
        high performance and reliability.
      </span>
    ),
    href: 'https://opentelemetry.io/',
  },
  {
    name: 'Next.js Absolute Imports',
    description: () => (
      <span>
        Simplifies your import statements by allowing you to import modules
        using absolute paths, reducing complexity and improving code
        readability.
      </span>
    ),
    href: 'https://nextjs.org/docs/advanced-features/module-path-aliases',
  },
  {
    name: 'Radix UI',
    description: () => (
      <span>
        Provides unstyled, accessible components for building high-quality,
        customizable UIs, ensuring your applications are accessible and
        adaptable to your design system.
      </span>
    ),
    href: 'https://www.radix-ui.com/',
  },
  {
    name: 'CVA',
    description: () => (
      <span>
        Implements a consistent, reusable, and atomic design system, enabling
        you to manage your visual and functional UI elements efficiently,
        enhancing design coherence and developer productivity.
      </span>
    ),
    href: 'http://cva.style/',
  },
  {
    name: 'Renovate BOT',
    description: () => (
      <span>
        Automates dependency updates, keeping your project secure and up-to-date
        without manual intervention, reducing maintenance overhead and improving
        project health.
      </span>
    ),
    href: 'https://www.whitesourcesoftware.com/free-developer-tools/renovate',
  },
  {
    name: 'Internationalization with i18next',
    description: () => (
      <span>
        Facilitates building accessible applications with internationalization
        support, ensuring your application is usable and accessible to a global
        audience.
      </span>
    ),
    href: 'https://www.i18next.com/',
  },
  {
    name: 'Patch-package',
    description: () => (
      <span>
        Allows you to keep track of and persist fixes to node_modules
        dependencies, ensuring your modifications stay intact through installs
        and updates.
      </span>
    ),
    href: 'https://www.npmjs.com/package/patch-package',
  },
  {
    name: 'Components Coupling and Cohesion Graph',
    description: () => (
      <span>
        A visualization script built using <code>madge</code> for analyzing and
        managing the relationships and dependencies between components,
        promoting better architecture and maintainability.
      </span>
    ),
    href: 'https://github.com/pahen/madge',
  },
  {
    name: 'Automated ChatGPT Code Reviews',
    description: () => (
      <span>
        Utilizes AI to provide automated code reviews, offering insights and
        suggestions to improve code quality, maintainability, and adherence to
        best practices.
      </span>
    ),
    href: 'https://openai.com/chatgpt',
  },
  {
    name: 'Semantic Release',
    description: () => (
      <span>
        Automates versioning and changelog generation based on commit messages,
        streamlining the release process and ensuring consistent version
        management.
      </span>
    ),
    href: 'https://github.com/semantic-release/semantic-release',
  },
  {
    name: 'T3 Env',
    description: () => (
      <span>
        Streamlines the management of environment variables, providing a secure
        and efficient way to handle configuration across different environments.
      </span>
    ),
    href: 'https://env.t3.gg/',
  },
  {
    name: 'Health Checks',
    description: () => (
      <span>
        Implements Kubernetes-compatible health checks, ensuring your
        application&apos;s health and reliability through liveness, readiness,
        and startup probes for robust deployments.
      </span>
    ),
    href: 'https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/',
  },
]

const uiFeatures = [
  {
    name: 'Stripe Integration',
    description: () => (
      <span>
        Seamlessly integrates Stripe for secure and efficient payment
        processing, offering a streamlined checkout experience for your users
        and facilitating smooth financial transactions.
      </span>
    ),
    href: 'https://stripe.com/docs',
  },
  {
    name: 'Admin Dashboard',
    description: () => (
      <span>
        An advanced admin dashboard that provides comprehensive analytics on
        site visits, clicks, sales, and more, empowering you with the insights
        needed to make informed decisions.
      </span>
    ),
    href: '#', // Adjust the href to point to your specific documentation or further details about the admin dashboard if available
  },
  {
    name: 'Modern UI Homepage',
    description: () => (
      <span>
        Features a completely modern UI for the homepage, meticulously designed
        to showcase your product effectively, with all necessary elements to
        captivate and engage your audience.
      </span>
    ),
    href: '#', // Adjust the href to point to your specific documentation or further details about the homepage design if available
  },
  {
    name: 'Chatbot Assistant',
    description: () => (
      <span>
        Integrates a chatbot assistant to enhance user engagement, providing
        immediate responses to user inquiries, guiding them through your product
        features, and improving overall user experience.
      </span>
    ),
    href: '#', // Adjust the href to point to your specific documentation or further details about the chatbot functionality if available
  },
  {
    name: 'Internationalization',
    description: () => (
      <span>
        Comes with out-of-the-box support for English, German, and Bulgarian,
        featuring a user-friendly language switcher. Designed for effortless
        expansion, simply add your translation resources to introduce additional
        languages. Centralized management streamlines the integration process,
        making it seamless to globalize your application.
      </span>
    ),
    href: 'https://www.i18next.com/',
  },
  {
    name: 'App-Like Experience with PWA',
    description: () => (
      <span>
        Designed as a Progressive Web Application (PWA), our platform delivers
        an app-like experience directly in the web browser. Users can enjoy
        features such as offline usage, fast loading times, and the ability to
        install the application on their device for quick access, all
        contributing to a seamless and engaging user interface.
      </span>
    ),
    href: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps',
  },
  {
    name: 'Dark/Light Mode Toggle',
    description: () => (
      <span>
        Our platform offers a customizable dark/light mode toggle, allowing
        users to choose their preferred theme for optimal viewing comfort at any
        time of day. This feature not only enhances the user interface but also
        supports user accessibility and personalization preferences.
      </span>
    ),
    href: '#', // You can replace this with a link to more detailed documentation or a tutorial on how users can toggle between modes, if available.
  },
]

export const Table = ({ type }: { type: 'technical' | 'ui' }) => {
  const features = type === 'technical' ? technicalFeatures : uiFeatures

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
