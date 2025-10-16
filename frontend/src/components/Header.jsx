import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/image.png";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pagesAnchorEl, setPagesAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pagesBtnRef = useRef(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // screen < md

  // Grocery dropdown handlers
  const openGrocery = (event) => setAnchorEl(event.currentTarget);
  const closeGrocery = () => setAnchorEl(null);

  // Pages dropdown handlers (desktop)
  const openPages = (el) => setPagesAnchorEl(el);
  const closePages = () => setPagesAnchorEl(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navSx = {
    color: "rgba(55,65,81,1)",
    textTransform: "none",
    "&:hover": {
      color: "#0e544d",
      backgroundColor: "transparent",
    },
  };

  const pages = [
    "Flash Sale",
    "Manufacturers/Publishers",
    "Authors",
    "FAQ",
    "Terms & Conditions",
    "Customer Refund Policy",
    "Vendor Refund Policy",
  ];

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 3 : 0}
      sx={{
        backgroundColor: scrolled ? "white" : "transparent",
        transition: "all 0.3s ease",
        // Reduce vertical padding on small screens
        py: { xs: 1, sm: 2 }, // xs = small screens: 1 unit (~8px), sm+ = 2 units (~16px)
      }}
      className="z-50"
    >
      <Toolbar className="flex justify-between">
        {/* Left: Logo + Grocery */}
        <Box className="flex items-center space-x-4">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8 w-auto cursor-pointer" />
          </Link>

          <Button
            variant="outlined"
            onClick={openGrocery}
            endIcon={<ArrowDropDownIcon />}
            startIcon={<LocalGroceryStoreIcon />}
            sx={{
              textTransform: "none",
              borderColor: "#10645b",
              color: "#10645b",
              "&:hover": {
                backgroundColor: "transparent",
                borderColor: "#0e544d",
                color: "#0e544d",
              },
            }}
          >
            Grocery
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeGrocery}
            disableScrollLock
          >
            {["Fruits", "Vegetables", "Snacks"].map((item) => (
              <MenuItem
                key={item}
                onClick={closeGrocery}
                sx={{
                  "&:hover": {
                    color: "#0e544d",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Right: Nav Links / Buttons */}
        <Box className="flex items-center text-gray-700">
          {!isMobile && (
            <>
              {/* Desktop Nav Links */}
              <Box className="flex space-x-6 mr-10">
                <Button component={Link} to="/shops" sx={navSx}>
                  Shops
                </Button>
                <Button component={Link} to="/offers" sx={navSx}>
                  Offers
                </Button>
                <Button component={Link} to="/contact" sx={navSx}>
                  Contact
                </Button>

                <Box
                  onMouseEnter={() => openPages(pagesBtnRef.current)}
                  onMouseLeave={closePages}
                  className="relative"
                >
                  <Button
                    ref={pagesBtnRef}
                    color="inherit"
                    endIcon={<ArrowDropDownIcon />}
                    sx={navSx}
                  >
                    Pages
                  </Button>

                  <Menu
                    anchorEl={pagesAnchorEl}
                    open={Boolean(pagesAnchorEl)}
                    onClose={closePages}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    disableScrollLock
                    MenuListProps={{
                      onMouseEnter: () => openPages(pagesBtnRef.current),
                      onMouseLeave: closePages,
                      sx: { backgroundColor: "white" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        onClick={closePages}
                        sx={{
                          "&:hover": {
                            color: "#0e544d",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {page}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>

              {/* Desktop Buttons */}
              <Box className="flex items-center">
                <Button
                  variant="contained"
                  className="!bg-[#10645b] hover:!bg-[#0e544d] normal-case rounded-lg shadow-none !mr-5"
                  sx={{ textTransform: "none" }}
                  onClick={() => setShowSignIn(true)}
                >
                  Join
                </Button>
                <Button
                  variant="contained"
                  className="!bg-[#10645b] hover:!bg-[#0e544d] normal-case rounded-lg shadow-none"
                  sx={{ textTransform: "none" }}
                >
                  Become a Seller
                </Button>
              </Box>
            </>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon sx={{ color: "#10645b" }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            <ListItem
              button
              component={Link}
              to="/shops"
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary="Shops" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/offers"
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary="Offers" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contact"
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary="Contact" />
            </ListItem>

            {/* Pages with collapsible menu */}
            <ListItem
              button
              onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
            >
              <ListItemText primary="Pages" />
              <ArrowDropDownIcon />
            </ListItem>
            <Collapse in={mobilePagesOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 4 }}>
                {pages.map((page) => (
                  <ListItem
                    button
                    key={page}
                    onClick={() => setMobileOpen(false)}
                  >
                    <ListItemText primary={page} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>

          <Box className="flex flex-col gap-3 mt-4">
            <Button
              variant="contained"
              className="!bg-[#10645b] hover:!bg-[#0e544d]"
              onClick={() => {
                setShowSignIn(true);
                setMobileOpen(false);
              }}
            >
              Join
            </Button>
            <Button
              variant="contained"
              className="!bg-[#10645b] hover:!bg-[#0e544d]"
            >
              Become a Seller
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Modals */}
      {showSignIn && (
        <SignInModal
          onClose={() => setShowSignIn(false)}
          onSwitch={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />
      )}
      {showSignUp && (
        <SignUpModal
          onClose={() => setShowSignUp(false)}
          onSwitch={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />
      )}
    </AppBar>
  );
}
