<div align="center"> 
  <h1>Sanity.io + NextJS Portfolio Site</h1>
  <p>A portfolio template built with <a href="https://nextjs.org">Next.js</a>, <a href="https://tailwindcss.com">Tailwind CSS</a> and <a href="https://sanity.io">Sanity.io</a> for content</p>
</div>

To follow through step-by-step, follow [Evavic44 article - How to build a Portfolio Site with Sanity and Next.js][freecodecamp-guide] guide to learn how to set-up your Sanity account and connect the schema data

## Features

- A performant, static personal personal website with editable projects
- Manage portfolio content through sanity content lake by visiting `yourwebsite.com/studio`
- Webhook-triggered continuous deployment; Content updates will automatically trigger a build command
- Built with cutting-edge technologies: Next.js 13, TypeScript, Tailwind CSS

## Project Overview

| [Website][site]          | [Studio][studio]                 |

### Important files and folders

| File(s)                                                   | Description                                     |
| --------------------------------------------------------- | ----------------------------------------------- |
| [`sanity.config.ts`](sanity.config.ts)                    | Config file for Sanity Studio                   |
| [`sanity.client.ts`](sanity/sanity.client.ts)             | Config file for Sanity CLI                      |
| [`studio`](<./app/(studio)/studio/[[...index]]/page.tsx>) | Where Sanity Studio is mounted                  |
| [`schemaTypes`](./schemaTypes)                                    | Where Sanity Studio gets its content types from |
| [`sanity.query.ts`](./sanity/sanity.query.ts)             | Where Sanity data is described and retrieved    |

## Run project locally

```bash
git clone https://github.com/JCalmCrasher/sanity-nextjs-test.git

cd sanity-nextjs-test

npm install

npm run dev
```

Visit [http://localhost:3000][localhost-3000] to see your site <br />
Visit [http://localhost:3000/studio][localhost-3000-studio] to edit content

## Next steps

- [How to query content?][sanity-groq]
- [Sanity + NextJS Blog Template][other-templates]

<!-- LINK VARIABLES -->

[site]: https://sanity-nextjs-test-mu.vercel.app
[studio]: https://sanity-nextjs-test-mu.vercel.app/studio
[site-preview]: https://github.com/JCalmCrasher/sanity-nextjs-test/assets/62628408/46229dc5-e925-4608-909a-848163dd491a
[studio-preview]: https://github.com/JCalmCrasher/sanity-nextjs-test/assets/62628408/53148f15-3b59-4e78-b072-bb0143f8fe81
[sanity-homepage]: https://www.sanity.io
[sanity-groq]: https://www.sanity.io/docs/how-queries-work?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[freecodecamp-guide]: https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs/
[other-templates]: https://github.com/sanity-io/sanity-template-nextjs-appdir-personal-website
