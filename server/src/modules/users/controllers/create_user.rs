use actix_web::HttpResponse;
use actix_web::{web, Responder};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct NewUser {
    username: String,
    email: String,
}

// User creation controller (replace with your actual logic)
pub async fn create_user(data: web::Json<NewUser>) -> impl Responder {
    let new_user = data.into_inner();

    // Replace with your user creation logic (e.g., call a service)
    println!("Creating user: {:?}", new_user);

    // Return a response based on the outcome
    HttpResponse::Created().finish()
}
