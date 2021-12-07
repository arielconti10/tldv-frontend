
  <img  src="https://raw.githubusercontent.com/viniciushvc/next-boilerplate/master/public/img/icon-192.png" />


Start your project with Next and all <a href='#--technologies'>modern technologies</a>.

![ci](https://github.com/viniciushvc/next-boilerplate/workflows/ci/badge.svg)

## 🚀  Technologies

-  [NextJS](https://nextjs.org/)
-  [Preact](https://preactjs.com/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [xstyled](https://xstyled.dev/)
-  [Styled Components](https://styled-components.com/)
-  [Jest](https://jestjs.io/)
-  [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
-  [Storybook](https://storybook.js.org/)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [Plop Generator](https://plopjs.com/)
-  [Husky](https://github.com/typicode/husky)
-  [Next SEO](https://github.com/garmeeh/next-seo)
-  [Next PWA](https://github.com/shadowwalker/next-pwa)
-  [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)


## :desktop_computer: Getting Started

First, run next-app using this template

```bash
  yarn create next-app -e https://github.com/viniciushvc/next-boilerplate my-app
```

Second, install packages

```bash
  yarn
```

Third, run the development server

```bash
  yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## :information_source: Commands

-  `dev`: runs your application on `localhost:3000`
-  `build`: creates the production build version
-  `start`: starts a simple server with the build production code
-  `lint`: runs the linter in all components and pages
-  `test`: runs jest to test all components and pages
-  `test:watch`: runs jest in watch mode
-  `storybook`: runs storybook on `localhost:6006`
-  `build-storybook`: create the build version of storybook
-  `g`: generate component files in `components/Component Name`
-  `analyze`: same as `build` but creates bundle analyzer file

## :stars: Reducing bundle size

When you build the application, React is changed by Preact to generate a smaller bundle.

To disable, remove/comment this code:

``` diff
next.config.js
- webpack: (config, { dev, isServer }) => {
-   if (!dev && !isServer) {
-     Object.assign(config.resolve.alias, {
-       react: 'preact/compat',
-       'react-dom/test-utils': 'preact/test-utils',
-       'react-dom': 'preact/compat'
-     })
-   }
-   return config
- }
```

## :zap: Show your support

Give a ⭐️ if this template helped you!
