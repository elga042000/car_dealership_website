This challenge taught me many things that were new to me, especially around deployment and connecting frontend and backend systems.

My technical background is in Flutter, ASP.NET CORE WEB API, and MS SQL Server development. For this project, I chose React, Tailwind CSS, Node.js, Express, and MongoDB because I wanted to learn a modern JavaScript-based full stack workflow and build something that is easy to deploy using Vercel.

Before this project, I knew basic React but had never fully deployed both a frontend and backend project. One of the biggest things I learned was how environment variables work. My booking form worked locally but stopped working after deployment because my MongoDB connection string was only stored in a local .env file. I learned that Vercel also needs these environment variables added in its dashboard.

I also learned how frontend and backend URLs need to be updated after deployment. Initially, my frontend was still trying to call localhost:5000, which obviously does not exist in production. I had to replace it with the deployed backend URL.

Another thing I learned was how important responsive design is. Sometimes changes that looked good on desktop broke the mobile version. I had to repeatedly adjust spacing, button sizes, navbar behavior, and card layouts.

I also became more comfortable using Tailwind CSS. For animations, I used Framer Motion.

The hardest part of the challenge was deployment. I had issues with private Vercel previews, missing environment variables, wrong API routes, and backend connection errors. I solved these by checking Vercel logs, comparing local and deployed behavior, and reading documentation.

Main resources I used:
Chatgpt
Grok AI
Vercel deployment documentation
MongoDB Atlas documentation
YouTube tutorials for Vercel deployment and MongoDB connection

Overall, this challenge helped me understand how a complete project works from UI design to database connection to deployment. I still have more to learn, but I feel much more confident now than before starting this project.
