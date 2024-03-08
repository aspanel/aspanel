use crate::modules::users::user_routes::{self, user_routes};
use actix_web::{web, Responder};

async fn index() -> impl Responder {
    "hello Rust"
}

pub fn app_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(web::scope("/api").route("/hello", web::get().to(index)));
}
