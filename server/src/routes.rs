use crate::modules::users::user_routes::user_routes;
use actix_web::web;

pub fn app_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(web::scope("/api").configure(user_routes));
}
