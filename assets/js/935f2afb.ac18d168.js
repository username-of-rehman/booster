"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/","docId":"introduction"},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Build a Booster app in minutes","href":"/getting-started/coding","docId":"getting-started/coding"}],"collapsed":true,"collapsible":true,"href":"/category/getting-started"},{"type":"category","label":"Booster architecture","collapsed":false,"items":[{"type":"link","label":"Command","href":"/architecture/command","docId":"architecture/command"},{"type":"link","label":"Event","href":"/architecture/event","docId":"architecture/event"},{"type":"link","label":"Event handler","href":"/architecture/event-handler","docId":"architecture/event-handler"},{"type":"link","label":"Entity","href":"/architecture/entity","docId":"architecture/entity"},{"type":"link","label":"Read model","href":"/architecture/read-model","docId":"architecture/read-model"}],"collapsible":true,"href":"/architecture/event-driven"},{"type":"category","label":"Features","collapsed":false,"items":[{"type":"link","label":"The event stream","href":"/features/event-stream","docId":"features/event-stream"},{"type":"link","label":"Schedule actions","href":"/features/schedule-actions","docId":"features/schedule-actions"},{"type":"link","label":"Logging in Booster","href":"/features/logging","docId":"features/logging"},{"type":"link","label":"Error handling","href":"/features/error-handling","docId":"features/error-handling"}],"collapsible":true,"href":"/category/features"},{"type":"category","label":"Security","items":[{"type":"link","label":"Authentication","href":"/security/authentication","docId":"security/authentication"},{"type":"link","label":"Authorization","href":"/security/authorization","docId":"security/authorization"}],"collapsed":true,"collapsible":true,"href":"/security/security"},{"type":"link","label":"GraphQL API","href":"/graphql","docId":"graphql"},{"type":"link","label":"Booster CLI","href":"/booster-cli","docId":"booster-cli"},{"type":"category","label":"Going deeper with Booster","items":[{"type":"link","label":"Environments","href":"/going-deep/environment-configuration","docId":"going-deep/environment-configuration"},{"type":"link","label":"Configuring Infrastructure Providers","href":"/going-deep/infrastructure-providers","docId":"going-deep/infrastructure-providers"},{"type":"link","label":"Framework packages","href":"/going-deep/framework-packages","docId":"going-deep/framework-packages"},{"type":"link","label":"Testing","href":"/going-deep/testing","docId":"going-deep/testing"},{"type":"link","label":"Migrations","href":"/going-deep/data-migrations","docId":"going-deep/data-migrations"},{"type":"link","label":"Create custom providers","href":"/going-deep/custom-providers","docId":"going-deep/custom-providers"},{"type":"link","label":"Extending Booster with Rockets!","href":"/going-deep/rockets","docId":"going-deep/rockets"},{"type":"link","label":"Customizing CLI resource templates","href":"/going-deep/custom-templates","docId":"going-deep/custom-templates"}],"collapsed":true,"collapsible":true,"href":"/category/going-deeper-with-booster"},{"type":"link","label":"Frequently Asked Questions","href":"/frequently-asked-questions","docId":"frequently-asked-questions"},{"type":"link","label":"Contributing to Booster","href":"/contributing","docId":"contributing"}]},"docs":{"architecture/command":{"id":"architecture/command","title":"Command","description":"Commands are any action a user performs on your application. For example, RemoveItemFromCart, RatePhoto or AddCommentToPost. They express the intention of an user, and they are the main interaction mechanism of your application. They are a similar to the concept of a  request on a REST API. Command issuers can also send data on a command as parameters.","sidebar":"docs"},"architecture/entity":{"id":"architecture/entity","title":"Entity","description":"If events are the source of truth of your application, entities are the current state of your application. For example, if you have an application that allows users to create bank accounts, the events would be something like AccountCreated, MoneyDeposited, MoneyWithdrawn, etc. But the entities would be the BankAccount themselves, with the current balance, owner, etc.","sidebar":"docs"},"architecture/event":{"id":"architecture/event","title":"Event","description":"An event is a fact of something that has happened in your application. Every action that takes place on your application should be stored as an event. They are stored in a single collection, forming a set of immutable records of facts that contain the whole story of your application. This collection of events is commonly known as the Event Store.","sidebar":"docs"},"architecture/event-driven":{"id":"architecture/event-driven","title":"Booster architecture","description":"Booster is a highly opinionated framework that provides a complete toolset to build production-ready event-driven serverless applications.","sidebar":"docs"},"architecture/event-handler":{"id":"architecture/event-handler","title":"Event handler","description":"Learn how to react to events and trigger side effects in Booster by defining event handlers.","sidebar":"docs"},"architecture/read-model":{"id":"architecture/read-model","title":"Read model","description":"A read model contains the data of your application that is exposed to the client through the GraphQL API. It\'s a projection of one or more entities, so you dont have to directly expose them to the client. Booster generates the GraphQL queries that allow you to fetch your read models.","sidebar":"docs"},"booster-cli":{"id":"booster-cli","title":"Booster CLI","description":"Booster CLI is a command line interface that helps you to create, develop, and deploy your Booster applications. It is built with Node.js and published to NPM through the package @boostercloud/cli . You can install it using any compatible package manager. If you want to contribute to the project, you will also need to clone the GitHub repository and compile the source code.","sidebar":"docs"},"contributing":{"id":"contributing","title":"Contributing to Booster","description":"DISCLAIMER: The Booster docs are undergoing an overhaul. Most of what\'s written here applies, but expect some hiccups in the build process","sidebar":"docs"},"features/error-handling":{"id":"features/error-handling","title":"Error handling","description":"Error handling in Booster","sidebar":"docs"},"features/event-stream":{"id":"features/event-stream","title":"The event stream","description":"The event stream API is a read-only API that allows you to fetch the events that have been generated by your application. It\'s useful for debugging purposes, but also for building your own analytics tools. The access to this API is disabled by default, but you can enable it by configuring the authorizeReadEvents policy in your entities. You can also use the authorizeReadEvents policy to restrict access to the events of certain entities.","sidebar":"docs"},"features/logging":{"id":"features/logging","title":"Logging in Booster","description":"If no configuration is provided, Booster uses the default JavaScript logging capabilities. Depending on the log level, it will call different logging methods:","sidebar":"docs"},"features/schedule-actions":{"id":"features/schedule-actions","title":"Schedule actions","description":"Booster way to scheudle an action to be performed at a specific moment in time","sidebar":"docs"},"frequently-asked-questions":{"id":"frequently-asked-questions","title":"Frequently Asked Questions","description":"1.- When deploying my application in AWS for the first time, I got an error saying _\\"StagingBucket your app name -toolkit-bucket already exists\\"_","sidebar":"docs"},"getting-started/coding":{"id":"getting-started/coding","title":"Build a Booster app in minutes","description":"How to have the backend up and running for a blog application in a few minutes","sidebar":"docs"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"How to install Booster locally, and start a Booster project in no time.","sidebar":"docs"},"going-deep/custom-providers":{"id":"going-deep/custom-providers","title":"Create custom providers","description":"Booster provides an infrastructure layer out of the box with sensible defaults that you can use for rapid development, but if","sidebar":"docs"},"going-deep/custom-templates":{"id":"going-deep/custom-templates","title":"Customizing CLI resource templates","description":"You can change what the newly created Booster resources will contain by customizing the resource template files.","sidebar":"docs"},"going-deep/data-migrations":{"id":"going-deep/data-migrations","title":"Migrations","description":"Learn how to migrate data in Booster","sidebar":"docs"},"going-deep/environment-configuration":{"id":"going-deep/environment-configuration","title":"Environments","description":"You can create multiple environments calling the Booster.configure function several times using different environment names as the first argument. You can create one file for each environment, but it is not required. In this example we set all environments in a single file:","sidebar":"docs"},"going-deep/framework-packages":{"id":"going-deep/framework-packages","title":"Framework packages","description":"The framework is already splitted into different packages:","sidebar":"docs"},"going-deep/infrastructure-providers":{"id":"going-deep/infrastructure-providers","title":"Configuring Infrastructure Providers","description":"The providers are different implementations of the Booster runtime to allow Booster applications run on different cloud providers or services. They all implement the same interface, and the main idea behind the providers is that no matter what the developer chooses as backend, they won\'t need to know anything about the underlying infrastructure.","sidebar":"docs"},"going-deep/rockets":{"id":"going-deep/rockets","title":"Extending Booster with Rockets!","description":"You can extend Booster by creating rockets. A rocket is just a node package that implements the public Booster rocket interfaces. You can use them for many things:","sidebar":"docs"},"going-deep/testing":{"id":"going-deep/testing","title":"Testing","description":"Booster applications are fully tested by default. This means that you can be sure that your application will work as expected. However, you can also write your own tests to check that your application behaves as you expect. In this section, we will leave some recommendations on how to test your Booster application.","sidebar":"docs"},"graphql":{"id":"graphql","title":"GraphQL API","description":"This is the main API of your application, as it allows you to:","sidebar":"docs"},"introduction":{"id":"introduction","title":"Introduction","description":"Progress isn\'t made by early risers. It\'s made by lazy men trying to find easier ways to do something. \u2014 Robert A. Heinlein","sidebar":"docs"},"security/authentication":{"id":"security/authentication","title":"Authentication","description":"Booster uses the OAuth 2.0 protocol to authenticate users. This section explains how to configure it.","sidebar":"docs"},"security/authorization":{"id":"security/authorization","title":"Authorization","description":"Booster uses a whitelisting approach to authorize users to perform commands and read models. This means that you must explicitly specify which users are allowed to perform each action. In order to do that you must configure the authorize policy parameter on every Command or Read Model. This parameter accepts one of the following options:","sidebar":"docs"},"security/security":{"id":"security/security","title":"Security","description":"Booster accepts standard JWT tokens to authenticate incoming requests.","sidebar":"docs"}}}')}}]);