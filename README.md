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
    │   ├── dist
    │   │   ├── assets
    │   │   │   ├── Button-DP3KAdcV.js
    │   │   │   ├── Dashboard-BptVGdl8.js
    │   │   │   ├── Error-fRWG5YNg.js
    │   │   │   ├── ExploreDesigns-DDQWS2Zm.js
    │   │   │   ├── Home-DMTUQ27r.js
    │   │   │   ├── Loader-D3-Dk19m.js
    │   │   │   ├── Login-HPlb68Rm.js
    │   │   │   ├── Mona-Sans-CxWibSko.ttf
    │   │   │   ├── Navbar-CVYLvM_Q.js
    │   │   │   ├── Navbar-DsLgmgZ5.css
    │   │   │   ├── OpenRoute-MtB1c2lk.js
    │   │   │   ├── PrivateRoute-DX1ehYju.js
    │   │   │   ├── Profile-CYLgQVwj.js
    │   │   │   ├── Signup-D6Fed_mF.js
    │   │   │   ├── Try-eF6xX8KE.js
    │   │   │   ├── UnderlineText-Bdtvnf9h.js
    │   │   │   ├── WhiteButton-CPXUd39-.js
    │   │   │   ├── index-Ci0ggmOj.js
    │   │   │   ├── index-_phLNkbs.css
    │   │   │   ├── index-cwotrzEN.js
    │   │   │   ├── index-tWfLRCcP.js
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
    │   │   │   └── sample
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
