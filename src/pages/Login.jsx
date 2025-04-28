// import React, { useState } from 'react';
// import {
//   Container,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Link,
// } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // TODO: Implement login logic
//     console.log('Login form submitted:', formData);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           mt: 8,
//           mb: 6,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             width: '100%',
//           }}
//         >
//           <Typography component="h1" variant="h5" gutterBottom>
//             Login
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Box sx={{ textAlign: 'center' }}>
//               <Link component={RouterLink} to="/register" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Box>
//           </Box>
//         </Paper>
//       </Box>
//     </Container>
//   );
// }

// export default Login; 