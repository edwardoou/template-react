import { useState } from "react";
import { Box, Button, TextField, Grid, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getData } from "../../service";

const Home = () => {
  const [user, setUser] = useState({});

  const [username, setUsername] = useState("");

  const getUserFromGitHub = async () => {
    const user = await getData(`/users/${username}`);
    setUsername("");
    setUser(user);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      m={5}
    >
      <div>
        <h1>Buscar por usuario</h1>
      </div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        textAlign="center"
        direction="row"
      >
        {/* Form */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            size="small"
            margin="normal"
            label="Escriba el nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            endIcon={<SendIcon />}
            size="large"
            variant="contained"
            color="primary"
            onClick={getUserFromGitHub}
          >
            Buscar
          </Button>
        </Grid>
        {/* Resultado */}
        <Grid
          item
          xs={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
          sx={{ bgcolor: "background.black", color: "text.white" }}
        >
          <Avatar
            style={{ alignSelf: "center" }}
            src={user?.avatar_url}
            alt=""
            sx={{ width: 245, height: 245 }}
          />
          <p>
            NOMBRE: {user?.name ?? "Name"}
            <br />
            <br />
            USUARIO: {user?.login ?? "Username"}
            <br />
            <br />
            BIO: {user?.bio ?? "Bio"}
          </p>
        </Grid>
      </Grid>
      <div></div>
    </Box>
  );
};

export default Home;
