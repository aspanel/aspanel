mod app;
mod routes;
mod modules;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    app::run_server().await
}