import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MuiNavabar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            //   sx={{ flexGrow: 1 }}
          >
            POKEMON APP
          </Typography>
          <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleChange}
              aria-label={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Resources
            </Button>
            <Button color="inherit">Login</Button>
          </Stack>
          <Menu
            id="resources-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>Blog</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MuiNavabar;
