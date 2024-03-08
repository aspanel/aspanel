use actix_web::{App, HttpServer};
use crate::routes::app_routes;


pub async fn run_server() -> std::io::Result<()> {
    let server = HttpServer::new(|| App::new().configure(app_routes));

    server
        .bind(("127.0.0.1", 8000))?
        .run()
        .await
}
