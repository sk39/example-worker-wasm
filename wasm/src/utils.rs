use crate::types::ExampleItem;
use chrono::{DateTime, FixedOffset};

// pub fn set_panic_hook() {
//     #[cfg(feature = "console_error_panic_hook")]
//     console_error_panic_hook::set_once();
// }

pub fn convert_example_item(item: &mut ExampleItem) {
    item.title = format_title(&item.title);
    item.body = item.body.to_uppercase();

    let id_as_number = item.id.parse::<u32>().unwrap_or(0) % 26;
    item.fib_value = Some(fib(id_as_number));
    item.created_at = format_datetime(&item.created_at);
    item.updated_at = format_datetime(&item.updated_at);
}

fn format_datetime(datetime: &str) -> String {
    let date_time: DateTime<FixedOffset> = datetime.parse().expect("Invalid date format");
    date_time.format("%Y/%m/%d").to_string()
}

fn format_title(base: &str) -> String {
    base.replace("Item", " Item").replace("-", " No.")
}

fn fib(n: u32) -> u32 {
    if n < 2 {
        n
    } else {
        fib(n - 1) + fib(n - 2)
    }
}
