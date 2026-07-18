# Valuon — AI Stock Valuation & Equity Research Platform

Building this module by module, per your request. This is **Module 1: Architecture & Scaffolding**.

## What exists after this module

- Full backend/frontend folder structure (clean architecture: routers → services → models,
  RAG/LLM/utils split into their own layers — same pattern proven out in the earlier
  ai-financial-analyst build)
- FastAPI app boots, has CORS configured, connects to Postgres, exposes `GET /api/health`
- Next.js 14 (App Router) + TypeScript + Tailwind frontend boots, dark "financial terminal"
  theme in place, landing page renders
- Docker Compose for Postgres + backend + frontend
- `.env.example` for both sides

## What does NOT exist yet (coming in later modules)

No auth, no stock data, no statements, no ratios, no DCF, no charts, no RAG assistant, no
news, no watchlist. `main.py` has commented checklist lines showing exactly where each
module's router gets registered as it's built.

## Project structure

```
stock-valuation-platform/
├── backend/
│   ├── app/
│   │   ├── main.py              FastAPI app, CORS, router registration checklist
│   │   ├── core/                  config.py, security.py (JWT/hashing, ready for Module 2)
│   │   ├── database/              session.py
│   │   ├── models/                (empty — Module 2 adds User)
│   │   ├── schemas/                (empty)
│   │   ├── routers/                health.py so far
│   │   ├── services/                (empty)
│   │   ├── rag/                     (empty — Module 8)
│   │   ├── llm/                     (empty — Module 8)
│   │   └── utils/                   (empty)
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env.example
├── frontend/
│   ├── app/
│   │   ├── layout.tsx, page.tsx (landing), providers.tsx, globals.css
│   ├── lib/api.ts                axios client, ready for auth token wiring
│   ├── package.json
│   ├── Dockerfile
│   └── .env.example
├── docker-compose.yml
└── README.md
```

## Running what exists now

**Backend:**
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # edit DATABASE_URL if not using the Docker Postgres below

docker run -d --name pg -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=stock_valuation -p 5432:5432 postgres:16-alpine

uvicorn app.main:app --reload --port 8000
```
Check http://localhost:8000/api/health → `{"status": "ok", ...}`

**Frontend:**
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Visit http://localhost:3000 — you'll see the landing page.

**Or both at once:**
```bash
docker compose up --build
```

## Next module

Module 2: **Authentication** — User model, signup/login, JWT issuance/verification,
protected-route dependency on the backend, and login/signup pages + auth context on
the frontend. Say the word and I'll build it.
