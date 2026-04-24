import React, { useState, useEffect } from 'react';
import {
  Box, Container, Typography, Tabs, Tab, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Button, Dialog, DialogTitle, DialogContent,
  TextField, IconButton, Chip, Grid, Card, CardContent, AppBar, Toolbar
} from '@mui/material';
import { Delete, Edit, Logout } from '@mui/icons-material';
import axios from 'axios';

function AdminDashboard() {
  const [tabValue, setTabValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [callRequests, setCallRequests] = useState([]);
  const [stats, setStats] = useState({});
  const [openProductDialog, setOpenProductDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [productForm, setProductForm] = useState({
    name: '', category: '', price: '', description: '', material: '', weight: ''
  });

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const fetchData = async () => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const [productsRes, contactsRes, callsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/products', config),
        axios.get('http://localhost:5000/api/contacts', config),
        axios.get('http://localhost:5000/api/call-requests', config)
      ]);
      setProducts(productsRes.data);
      setContacts(contactsRes.data);
      setCallRequests(callsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        setToken(null);
      }
    }
  };

  const handleSaveProduct = async () => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      if (editingProduct) {
        await axios.put(`http://localhost:5000/api/products/${editingProduct.id}`, productForm, config);
      } else {
        await axios.post('http://localhost:5000/api/products', productForm, config);
      }
      setOpenProductDialog(false);
      fetchData();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure?')) {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`http://localhost:5000/api/products/${id}`, config);
      fetchData();
    }
  };

  if (!token) {
    return <LoginPage onLogin={setToken} />;
  }

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sagar Jeweller - Admin Dashboard
          </Typography>
          <Button color="inherit" onClick={() => {
            localStorage.removeItem('adminToken');
            setToken(null);
          }}>
            <Logout /> Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
            <Tab label="Products" />
            <Tab label="Contact Messages" />
            <Tab label="Call Requests" />
          </Tabs>

          {tabValue === 0 && (
            <Box sx={{ p: 3 }}>
              <Button variant="contained" onClick={() => {
                setEditingProduct(null);
                setProductForm({ name: '', category: '', price: '', description: '', material: '', weight: '' });
                setOpenProductDialog(true);
              }} sx={{ mb: 2 }}>
                Add Product
              </Button>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>₹{product.price}</TableCell>
                        <TableCell>
                          <IconButton onClick={() => {
                            setEditingProduct(product);
                            setProductForm(product);
                            setOpenProductDialog(true);
                          }}><Edit /></IconButton>
                          <IconButton onClick={() => handleDeleteProduct(product.id)}><Delete /></IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}

          {tabValue === 1 && (
            <TableContainer sx={{ p: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.message}</TableCell>
                      <TableCell>
                        <Chip label={contact.status} color={contact.status === 'unread' ? 'error' : 'success'} size="small" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {tabValue === 2 && (
            <TableContainer sx={{ p: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {callRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.name}</TableCell>
                      <TableCell>{request.phone}</TableCell>
                      <TableCell>
                        <Chip label={request.status} color={request.status === 'pending' ? 'warning' : 'success'} size="small" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Container>

      <Dialog open={openProductDialog} onClose={() => setOpenProductDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingProduct ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Name" value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} sx={{ mt: 2 }} />
          <TextField fullWidth label="Category" value={productForm.category} onChange={(e) => setProductForm({ ...productForm, category: e.target.value })} sx={{ mt: 2 }} />
          <TextField fullWidth label="Price" type="number" value={productForm.price} onChange={(e) => setProductForm({ ...productForm, price: e.target.value })} sx={{ mt: 2 }} />
          <TextField fullWidth multiline rows={3} label="Description" value={productForm.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} sx={{ mt: 2 }} />
          <Button variant="contained" onClick={handleSaveProduct} sx={{ mt: 3 }}>Save</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('adminToken', response.data.token);
      onLogin(response.data.token);
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
      <Paper sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>Sagar Jeweller Admin</Typography>
        <TextField fullWidth label="Username" value={username} onChange={(e) => setUsername(e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ mb: 2 }} />
        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
        <Button fullWidth variant="contained" onClick={handleLogin}>Login</Button>
      </Paper>
    </Box>
  );
}

export default AdminDashboard;
