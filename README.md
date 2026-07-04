# MERN Portfolio

A responsive full-stack portfolio site. React + Tailwind + Framer Motion on the
frontend, Express + MongoDB on the backend for a working contact form.

```
mern-portfolio/
├── client/     React app (Vite) — deploy to Vercel
└── server/     Express API — deploy to Render/Railway
```

## 1. Personalize your content

Almost everything you need to change lives in one file:

```
client/src/data/portfolioData.js
```

Edit your name, role, tagline, about text, tech stack, experience, and
projects there.

Then drop two files into `client/public/`:
- `profile.jpg` — your photo
- `resume.pdf` — your resume (powers the "Download Resume" button)

## 2. Run it locally

**Backend**
```bash
cd server
npm install
cp .env.example .env
# edit .env: add your MongoDB connection string (MongoDB Atlas free tier works great)
npm run dev
```

**Frontend** (in a new terminal)
```bash
cd client
npm install
cp .env.example .env
# .env already points at http://localhost:5000, matching the server above
npm run dev
```

Visit `http://localhost:5173`. Fill out the contact form to confirm messages
are saved to MongoDB (check the `contacts` collection, or hit
`GET http://localhost:5000/api/contact`).

## 3. MongoDB setup (free)

1. Create a free cluster at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Add a database user + password
3. Under Network Access, allow access from anywhere (`0.0.0.0/0`) so your
   hosted server can connect
4. Copy the connection string into `MONGO_URI` in `server/.env`

## 4. Deploy

**Frontend → Vercel**
1. Push this repo to GitHub
2. Import it in Vercel, set the project **root directory to `client`**
3. Add an environment variable: `VITE_API_URL` = your deployed server URL
   (you'll get this in the next step)
4. Deploy

**Backend → Render or Railway** (Vercel is built for frontends/serverless;
a small always-on Express server is simplest on Render or Railway's free tier)
1. New Web Service, root directory `server`
2. Build command: `npm install` — Start command: `npm start`
3. Add environment variables: `MONGO_URI`, `CLIENT_URL` (your Vercel domain,
   e.g. `https://your-portfolio.vercel.app`)
4. Deploy, copy the resulting URL, and set it as `VITE_API_URL` in Vercel
   (step above), then redeploy the frontend

## What's included

- Fully responsive layout (mobile → desktop)
- Editor-tab navigation with active-section highlighting
- Animated hero with a typing code effect
- About section with photo + tech stack
- Experience timeline
- Project grid with GitHub/live links
- Contact form wired to a real Express + MongoDB backend, with basic
  validation and rate limiting against spam
- Downloadable resume button
- SEO-friendly title/meta tags, accessible focus states, reduced-motion support

## Suggested next steps

- Swap in your real GitHub/LinkedIn links in `portfolioData.js`
- Add Google Analytics or Vercel Analytics once deployed
- Consider adding email notifications (e.g. via Resend or Nodemailer) so you
  get pinged when someone submits the contact form, in `server/routes/contact.js`
- Lock down `GET /api/contact` with a simple auth check before going to
  production, since it currently returns all messages to anyone who calls it
