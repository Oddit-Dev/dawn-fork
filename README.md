# Starter Theme

This is the theme for Starter Theme.

## Single Developer Git Strategy

1. Create a new branch called `develop` from `main`. e.g. `git checkout -b develop`
2. Make sure to rebase with `main` before creating a PR.
3. Create a PR and add ryansilva as a reviewer.

## Multiple Developers Git Strategy

1. Create a new branch from `main` for each page. e.g. `git checkout -b feature-branch-name`
2. Make sure to rebase with `main` before creating a PR.
3. Create a PR and add ryansilva as a reviewer.

## Getting started

1. Make sure to install the Prettier VS Code extension.
2. Make sure you have [Shopify CLI](https://github.com/Shopify/shopify-cli) installed.
3. Make sure you have Tailwind CSS installed globally:
```sh
npm install -g tailwindcss
```

## Local Development

Use Shopify CLI to start a local development server:
```sh
shopify theme dev --store store-admin-id
```

In a separate terminal window, run the following command to watch and compile Tailwind CSS:
```sh
npx tailwind -i tw-input.css -o ./assets/_custom.css --watch --minify
```

## Tailwind CSS

1. We use `tw-` prefix for all custom Tailwind CSS classes.
2. The `tw-input.css` file is the source of truth for Tailwind CSS. All changes should be made in this file and then will be compiled to `_custom.css`.
3. Look at the `tailwind.config.js` file to see the color and font definitions. Feel free to add/update new colors or fonts there.
