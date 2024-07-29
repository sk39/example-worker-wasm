use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct ExampleItem {
    pub id: String,
    pub title: String,
    pub body: String,
    #[serde(rename = "fibValue")]
    pub fib_value: Option<u32>,
    #[serde(rename = "createdAt")]
    pub created_at: String,
    #[serde(rename = "updatedAt")]
    pub updated_at: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ExampleResponse {
    pub count: usize,
    pub list: Vec<ExampleItem>,
}
