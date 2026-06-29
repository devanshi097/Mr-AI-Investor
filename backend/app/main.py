from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

companies = {
    "tcs": {
        "ticker": "TCS",
        "name": "Tata Consultancy Services",
        "sector": "Information Technology"
    },
    "infy": {
        "ticker": "INFY",
        "name": "Infosys",
        "sector": "Information Technology"
    },
    "reliance": {
        "ticker": "RELIANCE",
        "name": "Reliance Industries",
        "sector": "Conglomerate"
    }
}


@app.get("/")
def home():
    return {
        "message": "Hello from Mr. AI Investor!"
    }


@app.get("/company/{ticker}")
def get_company(ticker: str):
    return companies.get(
        ticker.lower(),
        {"error": "Company not found"}
    )