#Deployment URL

##<h1>Live Project : <a href="https://dribbble-clone-react.vercel.app/">https://dribbble-clone-react.vercel.app/</a></h1> 

# Project Directory Structure

```
└── Tripit-clone
    ├── README.md
    ├── dribbble-clone
    │   ├── Json-Server
    │   │   └── db.json
    │   ├── README.md
    │   ├── coverage
    │   │   ├── clover.xml
    │   │   ├── coverage-final.json
    │   │   ├── lcov-report
    │   │   │   ├── AuthSlice.ts.html
    │   │   │   ├── base.css
    │   │   │   ├── block-navigation.js
    │   │   │   ├── common
    │   │   │   │   ├── Buttons
    │   │   │   │   │   ├── Button.tsx.html
    │   │   │   │   │   ├── WhiteButton.tsx.html
    │   │   │   │   │   └── index.html
    │   │   │   │   ├── Home
    │   │   │   │   │   ├── UnderlineText.tsx.html
    │   │   │   │   │   └── index.html
    │   │   │   │   ├── HorizontalScroll
    │   │   │   │   │   ├── Designers.tsx.html
    │   │   │   │   │   └── index.html
    │   │   │   │   └── auth
    │   │   │   │       ├── AuthPages.tsx.html
    │   │   │   │       └── index.html
    │   │   │   ├── components
    │   │   │   │   └── auth
    │   │   │   │       ├── LoginForm.tsx.html
    │   │   │   │       ├── SignupForm.tsx.html
    │   │   │   │       └── index.html
    │   │   │   ├── favicon.png
    │   │   │   ├── index.html
    │   │   │   ├── pages
    │   │   │   │   └── common
    │   │   │   │       ├── ErrorBoundary.tsx.html
    │   │   │   │       ├── Users.tsx.html
    │   │   │   │       └── index.html
    │   │   │   ├── prettify.css
    │   │   │   ├── prettify.js
    │   │   │   ├── services
    │   │   │   │   └── redux
    │   │   │   │       └── slices
    │   │   │   │           ├── AuthSlice.ts.html
    │   │   │   │           └── index.html
    │   │   │   ├── sort-arrow-sprite.png
    │   │   │   ├── sorter.js
    │   │   │   └── src
    │   │   │       ├── App.tsx.html
    │   │   │       ├── common
    │   │   │       │   ├── Buttons
    │   │   │       │   │   ├── Button.tsx.html
    │   │   │       │   │   ├── WhiteButton.tsx.html
    │   │   │       │   │   └── index.html
    │   │   │       │   ├── Footer
    │   │   │       │   │   ├── FooterLink.tsx.html
    │   │   │       │   │   ├── FooterScrollCard.tsx.html
    │   │   │       │   │   ├── InfiniteScrollCards.tsx.html
    │   │   │       │   │   └── index.html
    │   │   │       │   ├── Home
    │   │   │       │   │   ├── Loader.tsx.html
    │   │   │       │   │   └── index.html
    │   │   │       │   ├── HorizontalScroll
    │   │   │       │   │   ├── Designers.tsx.html
    │   │   │       │   │   └── index.html
    │   │   │       │   └── auth
    │   │   │       │       ├── AuthPages.tsx.html
    │   │   │       │       └── index.html
    │   │   │       ├── components
    │   │   │       │   ├── common
    │   │   │       │   │   ├── WrapperHoc.tsx.html
    │   │   │       │   │   └── index.html
    │   │   │       │   └── home
    │   │   │       │       ├── Footer.tsx.html
    │   │   │       │       └── index.html
    │   │   │       ├── index.html
    │   │   │       ├── pages
    │   │   │       │   ├── Home.tsx.html
    │   │   │       │   ├── common
    │   │   │       │   │   ├── ErrorBoundary.tsx.html
    │   │   │       │   │   ├── Users.tsx.html
    │   │   │       │   │   └── index.html
    │   │   │       │   └── index.html
    │   │   │       └── services
    │   │   │           └── redux
    │   │   │               └── slices
    │   │   │                   ├── AuthSlice.ts.html
    │   │   │                   └── index.html
    │   │   └── lcov.info
    │   ├── dist
    │   │   ├── assets
    │   │   │   ├── Button-Cn8HvUQG.js
    │   │   │   ├── Dashboard-DhBdjJed.js
    │   │   │   ├── Error-BX4N3FYH.js
    │   │   │   ├── ExploreDesigns-DF8gkvFW.js
    │   │   │   ├── Home-C_z3xTVH.js
    │   │   │   ├── Loader-D_-n97Ep.js
    │   │   │   ├── Login-CmMUeZ1a.js
    │   │   │   ├── Mona-Sans-CxWibSko.ttf
    │   │   │   ├── Navbar-BD22Lg6V.js
    │   │   │   ├── Navbar-DsLgmgZ5.css
    │   │   │   ├── OpenRoute-BH7rjuYH.js
    │   │   │   ├── PrivateRoute-CqamCARR.js
    │   │   │   ├── Profile-_raRHVnj.js
    │   │   │   ├── Signup-DJNjD1IV.js
    │   │   │   ├── Try-BYmBdTEV.js
    │   │   │   ├── UnderlineText-57oumuvN.js
    │   │   │   ├── WhiteButton-SssOf72O.js
    │   │   │   ├── index-BC7E2Fye.js
    │   │   │   ├── index-DaTZa9kq.js
    │   │   │   ├── index-Dlepcakz.css
    │   │   │   ├── index-yssX1oj8.js
    │   │   │   └── logo-eWEjui3M.svg
    │   │   ├── images
    │   │   │   └── vite.svg
    │   │   └── index.html
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── jest.config.js
    │   ├── jest.setup.ts
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   └── images
    │   │       └── vite.svg
    │   ├── src
    │   │   ├── App.tsx
    │   │   ├── Types
    │   │   │   └── common.ts
    │   │   ├── __tests__
    │   │   │   ├── common
    │   │   │   │   ├── Buttons
    │   │   │   │   │   └── Button.test.tsx
    │   │   │   │   ├── HorizontalScroll
    │   │   │   │   │   └── Designers.test.tsx
    │   │   │   │   └── auth
    │   │   │   │       └── Authpages.test.tsx
    │   │   │   ├── components
    │   │   │   │   ├── auth-forms
    │   │   │   │   │   ├── LoginForm.test.tsx
    │   │   │   │   │   └── SignupForm.test.tsx
    │   │   │   │   └── home
    │   │   │   ├── react query
    │   │   │   ├── redux
    │   │   │   │   └── AuthSlice.test.ts
    │   │   │   └── sample
    │   │   │       ├── App.test.tsx
    │   │   │       └── Users.test.tsx
    │   │   ├── assets
    │   │   │   ├── Home
    │   │   │   │   ├── color-icon.svg
    │   │   │   │   ├── logo-black.svg
    │   │   │   │   └── logo.svg
    │   │   │   ├── data
    │   │   │   │   ├── design-cards-data.json
    │   │   │   │   ├── designer-data.json
    │   │   │   │   └── footer-data.json
    │   │   │   └── react.svg
    │   │   ├── common
    │   │   │   ├── Buttons
    │   │   │   │   ├── Button.tsx
    │   │   │   │   └── WhiteButton.tsx
    │   │   │   ├── Designs
    │   │   │   │   ├── DesignCard.tsx
    │   │   │   │   └── DesignGrid.tsx
    │   │   │   ├── Footer
    │   │   │   │   ├── FooterLink.tsx
    │   │   │   │   ├── FooterScrollCard.tsx
    │   │   │   │   └── InfiniteScrollCards.tsx
    │   │   │   ├── Home
    │   │   │   │   ├── Loader.tsx
    │   │   │   │   ├── Logo.tsx
    │   │   │   │   ├── TextLink.tsx
    │   │   │   │   └── UnderlineText.tsx
    │   │   │   ├── HorizontalScroll
    │   │   │   │   ├── DesignerCarousel.tsx
    │   │   │   │   └── Designers.tsx
    │   │   │   ├── Profile
    │   │   │   │   └── DesignTypesScroller.tsx
    │   │   │   └── auth
    │   │   │       ├── AuthPages.tsx
    │   │   │       ├── OpenRoute.tsx
    │   │   │       └── PrivateRoute.tsx
    │   │   ├── components
    │   │   │   ├── Profile
    │   │   │   │   └── DropdownMenu.tsx
    │   │   │   ├── auth
    │   │   │   │   ├── LoginForm.tsx
    │   │   │   │   └── SignupForm.tsx
    │   │   │   ├── common
    │   │   │   │   └── WrapperHoc.tsx
    │   │   │   └── home
    │   │   │       ├── ColoredHeading.tsx
    │   │   │       ├── Dropdown.tsx
    │   │   │       ├── Footer.tsx
    │   │   │       ├── HeroSection.tsx
    │   │   │       ├── HeroSectionComp
    │   │   │       │   ├── Designers.tsx
    │   │   │       │   └── ExploreDesigns.tsx
    │   │   │       ├── Navbar.tsx
    │   │   │       └── SearchBar.tsx
    │   │   ├── fonts
    │   │   │   ├── Mona-Sans.ttf
    │   │   │   ├── SourceSerif4-VariableFont_opsz,wght.ttf
    │   │   │   └── font-mono.css
    │   │   ├── index.css
    │   │   ├── main.tsx
    │   │   ├── pages
    │   │   │   ├── Dashboard.tsx
    │   │   │   ├── Home.tsx
    │   │   │   ├── Profile.tsx
    │   │   │   ├── auth
    │   │   │   │   ├── Login.tsx
    │   │   │   │   └── Signup.tsx
    │   │   │   └── common
    │   │   │       ├── Error.tsx
    │   │   │       ├── ErrorBoundary.tsx
    │   │   │       ├── Try.tsx
    │   │   │       └── Users.tsx
    │   │   ├── services
    │   │   │   ├── react-query
    │   │   │   │   ├── api-url.ts
    │   │   │   │   └── apis.ts
    │   │   │   └── redux
    │   │   │       ├── slices
    │   │   │       │   └── AuthSlice.ts
    │   │   │       └── store.ts
    │   │   └── vite-env.d.ts
    │   ├── tailwind.config.js
    │   ├── tsconfig.app.json
    │   ├── tsconfig.app.tsbuildinfo
    │   ├── tsconfig.json
    │   ├── tsconfig.node.json
    │   ├── tsconfig.node.tsbuildinfo
    │   └── vite.config.ts
    └── folder_str.js
```
