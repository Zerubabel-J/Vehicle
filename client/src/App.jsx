import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: 8,
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
