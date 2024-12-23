import { Typography } from "@mui/material";
import "./App.css";
function App() {
  return (
    <>
      <Typography
        sx={{
          color: {
            mobile: "red ",
            tablet: "black ",
            desktop: "blue ",
          },
        }}
      >
        Hey world
      </Typography>
    </>
  );
}

export default App;
