from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, FileResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from pathlib import Path
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(debug=True)

# Mengizinkan akses lintas domain dari halaman JavaScript
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

best_score = 0

app.mount("/static", StaticFiles(directory="static"), name="static")

html_path = Path("templates")

@app.get("/home", response_class=HTMLResponse)
async def start():
    html_file_path = html_path/"index.html"
    return FileResponse(path=html_file_path)

@app.post("/save_data/")
async def getBestScore(data: dict):
    global best_score
    best_score = data.get("best_score", False)
    if not best_score:
        return JSONResponse({"message": "error could not retrieve data"})
    return JSONResponse(data)

@app.get("/api/data/")
async def load_data():
    return {"best_score": best_score}