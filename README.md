## TLDV FRONT-END ASSIGNMENT
This repository contain the tl;dv developer assignment <br />
You can access it [here](https://tldv-client.herokuapp.com)

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
-  [Husky](https://github.com/typicode/husky)
-  [Next SEO](https://github.com/garmeeh/next-seo)
-  [Next PWA](https://github.com/shadowwalker/next-pwa)
-  [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)


## :desktop_computer: Getting Started

First, install packages

```bash
  yarn
```

Second, run the development server

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


## Extras

The whole project was built thinking in performance, 
At the build time the React dependencies is changed to Preact to reduce bundle size. 
Next.js was chosen to get the best SSR features and faster loading 

Lighthouse analysis of production: 
![image](https://user-images.githubusercontent.com/17475188/145813006-59a2f3ab-4bdc-46f0-a454-cf0a858aa306.png)
Also you can check this by yourself [here](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Ftldv-client.herokuapp.com%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext)

## Coming soon 
- Better performance on loading player 
- Layout improvements
