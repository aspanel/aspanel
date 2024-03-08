use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

pub async fn run() -> std::io::Result<()> {

    let server = HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
    });
    

    server
        .bind("127.0.0.1:4000")?
        .run()
        .await
        .map_err(|err| {
            eprintln!("Something went wrong while starting the server.... {}", err);
            err
        })
        .map(|_addr| {
            println!("Server is running at http://127.0.0.1:8080");
        })
}
