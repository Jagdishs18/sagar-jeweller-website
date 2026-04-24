const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = 'sagar_jeweller_secret_key_2025';

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'sagar_jeweller'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// ========== AUTHENTICATION ==========
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    
    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
  });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ error: 'No token provided' });
  
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

// ========== PRODUCTS API ==========
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  let query = 'SELECT * FROM products';
  let params = [];
  
  if (category) {
    query += ' WHERE category = ?';
    params.push(category);
  }
  
  db.query(query, params, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get('/api/products/:id', (req, res) => {
  db.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
});

app.post('/api/products', verifyToken, upload.single('image'), (req, res) => {
  const { name, category, price, description, material, weight, in_stock } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;
  
  db.query(
    'INSERT INTO products (name, category, price, image_url, description, material, weight, in_stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [name, category, price, image_url, description, material, weight, in_stock || true],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, message: 'Product created successfully' });
    }
  );
});

app.put('/api/products/:id', verifyToken, upload.single('image'), (req, res) => {
  const { name, category, price, description, material, weight, in_stock } = req.body;
  let query = 'UPDATE products SET name=?, category=?, price=?, description=?, material=?, weight=?, in_stock=?';
  let params = [name, category, price, description, material, weight, in_stock];
  
  if (req.file) {
    query += ', image_url=?';
    params.push(`/uploads/${req.file.filename}`);
  }
  
  query += ' WHERE id=?';
  params.push(req.params.id);
  
  db.query(query, params, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Product updated successfully' });
  });
});

app.delete('/api/products/:id', verifyToken, (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Product deleted successfully' });
  });
});

// ========== CONTACT API ==========
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  db.query(
    'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)',
    [name, email, phone, message],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Message sent successfully', id: result.insertId });
    }
  );
});

app.get('/api/contacts', verifyToken, (req, res) => {
  db.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.put('/api/contacts/:id/status', verifyToken, (req, res) => {
  const { status } = req.body;
  db.query('UPDATE contacts SET status = ? WHERE id = ?', [status, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Status updated' });
  });
});

// ========== CALL REQUESTS API ==========
app.post('/api/call-request', (req, res) => {
  const { name, phone, preferred_time } = req.body;
  db.query(
    'INSERT INTO call_requests (name, phone, preferred_time) VALUES (?, ?, ?)',
    [name, phone, preferred_time],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Call request submitted successfully' });
    }
  );
});

app.get('/api/call-requests', verifyToken, (req, res) => {
  db.query('SELECT * FROM call_requests ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// ========== BANNERS API ==========
app.get('/api/banners', (req, res) => {
  db.query('SELECT * FROM banners WHERE is_active = TRUE ORDER BY order_index', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.post('/api/banners', verifyToken, upload.single('image'), (req, res) => {
  const { title, subtitle, button_text, button_link, is_active, order_index } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;
  
  db.query(
    'INSERT INTO banners (title, subtitle, image_url, button_text, button_link, is_active, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [title, subtitle, image_url, button_text, button_link, is_active || 0, order_index || 0],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, message: 'Banner created' });
    }
  );
});

// Dashboard stats
app.get('/api/dashboard/stats', verifyToken, (req, res) => {
  const queries = {
    totalProducts: 'SELECT COUNT(*) as count FROM products',
    totalContacts: 'SELECT COUNT(*) as count FROM contacts',
    unreadContacts: 'SELECT COUNT(*) as count FROM contacts WHERE status = "unread"',
    pendingCalls: 'SELECT COUNT(*) as count FROM call_requests WHERE status = "pending"',
    totalValue: 'SELECT SUM(price) as total FROM products'
  };
  
  const results = {};
  let completed = 0;
  
  Object.keys(queries).forEach(key => {
    db.query(queries[key], (err, result) => {
      if (err) console.error(err);
      results[key] = result[0];
      completed++;
      
      if (completed === Object.keys(queries).length) {
        res.json(results);
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});