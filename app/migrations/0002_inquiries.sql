-- RFQ / contact inquiries captured from the site's Request a Quote and
-- Contact forms. Additive only (see migrations/0001_init.sql note).
CREATE TABLE IF NOT EXISTS inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  kind TEXT NOT NULL DEFAULT 'quote',
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  product_category TEXT,
  quantity TEXT,
  target_date TEXT,
  message TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
