# Creating APIs with Serverless Functions by Layer0: A Fake E-Commerce API

[![Deploy with Layer0](https://docs.layer0.co/button.svg)](https://app.layer0.co/deploy?repo=https://github.com/rishi-raj-jain/layer0-ecommmerce-api-example)

<br />

![Creating APIs with Serverless Functions by Layer0: A Fake E-Commerce API](https://raw.githubusercontent.com/rishi-raj-jain/layer0-ecommmerce-api-example/master/Layer0-Serverless-Functions.png)

[Layer0 Serverless Functions](https://docs.layer0.co/guides/serverless_functions) allow you to create APIs without using a Javascript framework. This example is to create a free online REST API that you can use whenever you need Pseudo-real data for your e-commerce without running any server-side code.

## Resources

There are 3 main resources need in e-commerce prototypes:

- All Products: /products/all
- Specific Product: /products/:slug
- Image(s) of the products: /product-images/:slug

## How To

One can fetch data with any kind of methods you know(fetch API, Axios, JQuery AJAX, etc.)

### Get all products
```js
fetch("https://layer0-docs-layer0-ecommmerce-api-example-default.layer0-limelight.link/products/all")
  .then((res) => res.json())
  .then((res) => console.log(res))
```

### Get a single product
```js
fetch("https://layer0-docs-layer0-ecommmerce-api-example-default.layer0-limelight.link/products/next-js-enamel-mug")
  .then((res) => res.json())
  .then((res) => console.log(res))
```

### Get all images of a product
```js
fetch("https://layer0-docs-layer0-ecommmerce-api-example-default.layer0-limelight.link/product-images/next-js-enamel-mug")
  .then((res) => res.json())
  .then((res) => console.log(res))
```

## [Contributing] Getting Started

### Clone This Repo

Use `git clone https://github.com/rishi-raj-jain/layer0-ecommmerce-api-example.git` to get the files within this repository onto your local machine.

### Install dependencies

On the command line, in the project root directory, run the following command:

```bash
npm install
```

### Run Serverless Functions locally on Layer0

Run the Layer0 app with the command:

```bash
0 dev
```

Load the site: http://127.0.0.1:3000

### Testing production build locally with Layer0

You can do a production build of your app and test it locally using:

```bash
0 build && 0 run --production
```

Setting --production runs your app exactly as it will be uploaded to the Layer0 cloud using serverless-offline.

## Deploying to Layer0

Deploying requires an account on Layer0. [Sign up here for free](https://app.layer0.co/signup). Once you have an account, you can deploy to Layer0 by running the following in the root folder of your project:

```bash
0 deploy
```

See [deploying](https://docs.layer0.co/guides/deploying) for more information.
