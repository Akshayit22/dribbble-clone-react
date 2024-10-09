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
    │   │   │   ├── Button-B66i7Gs-.js
    │   │   │   ├── Dashboard-CI2Ulhq9.js
    │   │   │   ├── Error-DU6c-VuS.js
    │   │   │   ├── ExploreDesigns-BZGRYQPm.js
    │   │   │   ├── Home-DcI6Eg1f.js
    │   │   │   ├── Loader-BWYVVz4I.js
    │   │   │   ├── Login-C8MJn-2I.js
    │   │   │   ├── Mona-Sans-CxWibSko.ttf
    │   │   │   ├── Navbar-Cmg5bwUS.js
    │   │   │   ├── Navbar-DsLgmgZ5.css
    │   │   │   ├── OpenRoute-DoPaK5a2.js
    │   │   │   ├── PrivateRoute-t9qLjjDq.js
    │   │   │   ├── Profile-DTeWDcHD.js
    │   │   │   ├── Signup-BTafiTim.js
    │   │   │   ├── Try-CD9YaJfh.js
    │   │   │   ├── UnderlineText-PTFHy-Bh.js
    │   │   │   ├── WhiteButton-BaJwySWR.js
    │   │   │   ├── index-Bi8zl65B.js
    │   │   │   ├── index-_phLNkbs.css
    │   │   │   ├── index-ik6_yn-K.js
    │   │   │   ├── index-rNZ9U3d_.js
    │   │   │   └── logo-eWEjui3M.svg
    │   │   ├── images
    │   │   │   └── vite.svg
    │   │   └── index.html
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   └── images
    │   │       └── vite.svg
    │   ├── src
    │   │   ├── App.tsx
    │   │   ├── Types
    │   │   │   └── common.ts
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
    │   │   │       └── Try.tsx
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
