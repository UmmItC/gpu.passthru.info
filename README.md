# GPU-Passthru

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

To get started, install the necessary dependencies and upgrade to the latest versions:

```bash
yarn install
yarn upgrade --latest
```

## Local Development

To start a local development server, run:

```bash
yarn start
```

## Build

To generate static content, use the following command:

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Deployment

To deploy your website, simply run:

```bash
yarn deploy
```

This command builds the website and pushes it to the `gh-pages` branch, making it easy to deploy to GitHub Pages.

### Custom Domain

Modify the `baseUrl` field in the `docusaurus.config.js` file to match your custom domain.

```js
const config: Config = {
  title: 'GPU Passthrough Made Easy',
  tagline: 'Made GPU-Passthru easy, for everyone. Just follow the guide!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gpu-passthru.ummit.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

```

And the CNAME file in the `static` directory:

```bash
echo "domain.com" > static/CNAME
```

As the example is using the domain 'domain.com', replace it with your custom domain.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. We welcome contributions of all kinds!

Also please adhere to the conventional commits specification, keep commit messages clear :)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
