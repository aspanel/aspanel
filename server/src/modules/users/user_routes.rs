use actix_web::{web, HttpResponse, Responder};


async fn index() -> impl Responder {
    HttpResponse::Ok().body("Hello rust!")
}


pub fn user_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(web::resource("/users").route(web::get().to(index)));
}
