from typing import Union
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import os
from fastapi.responses import FileResponse

dist_path = os.path.join(os.path.dirname(__file__), '..', 'client', 'dist')

app = FastAPI(title="ASPANEL API", description="API refrence for ASPANEL project.")

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/", response_class=FileResponse)
def serve_root():
    index_file = os.path.join(dist_path, 'index.html')
    return FileResponse(index_file)

app.mount("/", StaticFiles(directory=dist_path), name="client")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)