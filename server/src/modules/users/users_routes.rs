use actix_web::web;

use super::controllers::create_user::create_user;

pub fn config(cfg: &mut web::ServiceConfig) {
    // Mount routes for other modules or top-level resources here
    cfg.service(web::resource("/users").route(web::post().to(create_user)));
    return;
}