mod types;
mod utils;

use crate::types::ExampleResponse;
use crate::utils::convert_example_item;
use serde_wasm_bindgen::{from_value, to_value};
use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};

#[wasm_bindgen]
pub async fn fetch_examples(is_worker: bool) -> Result<JsValue, JsValue> {
    // utils::set_panic_hook();

    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let request = Request::new_with_str_and_init("/api/examples", &opts)?;

    let resp_value = if is_worker {
        let global = js_sys::global().unchecked_into::<web_sys::WorkerGlobalScope>();
        JsFuture::from(global.fetch_with_request(&request)).await?
    } else {
        let window = web_sys::window().unwrap();
        JsFuture::from(window.fetch_with_request(&request)).await?
    };

    assert!(resp_value.is_instance_of::<Response>());
    let resp: Response = resp_value.dyn_into().unwrap();
    let json: JsValue = JsFuture::from(resp.json()?).await?;

    let mut res: ExampleResponse = from_value(json).unwrap();
    for item in &mut res.list {
        convert_example_item(item);
    }
    Ok(to_value(&res).unwrap())
}
