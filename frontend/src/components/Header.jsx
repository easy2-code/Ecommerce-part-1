import React from "react";
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link } from "react-router-dom";
import Logo from "../assets/imgs/image.png";

export default function Header() {
  // State for controlling "Grocery" dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  // State for controlling "Pages" dropdown menu
  const [pagesAnchorEl, setPagesAnchorEl] = React.useState(null);
  // State to track if the page has scrolled (for AppBar style changes)
  const [scrolled, setScrolled] = React.useState(false);
  // Reference to the "Pages" button (used to anchor the dropdown)
  const pagesBtnRef = React.useRef(null);

  // Handlers for Grocery dropdown
  const openGrocery = (event) => setAnchorEl(event.currentTarget);
  const closeGrocery = () => setAnchorEl(null);

  // Handlers for Pages dropdown
  const openPages = (el) => setPagesAnchorEl(el);
  const closePages = () => setPagesAnchorEl(null);

  // Detect scroll to add shadow and background color to AppBar
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common styles for navigation buttons (Shops, Offers, Contact, Pages)
  const navSx = {
    color: "rgba(55,65,81,1)",
    textTransform: "none",
    "&:hover": {
      color: "#0e544d",
      backgroundColor: "transparent",
    },
  };

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 3 : 0}
      sx={{
        backgroundColor: scrolled ? "white" : "transparent",
        transition: "all 0.3s ease",
      }}
      className="py-2 z-50"
    >
      <Toolbar className="flex justify-between">
        {/* ================= Left Section: Logo + Grocery ================= */}
        <Box className="flex items-center space-x-4">
          {/* Logo */}
          <img src={Logo} alt="PickBazar Logo" className="h-8 w-auto" />
          {/* Grocery dropdown button */}
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
          {/* Grocery dropdown menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeGrocery}
          >
            <MenuItem
              onClick={closeGrocery}
              sx={{
                "&:hover": { color: "#0e544d", backgroundColor: "transparent" },
              }}
            >
              Fruits
            </MenuItem>
            <MenuItem
              onClick={closeGrocery}
              sx={{
                "&:hover": { color: "#0e544d", backgroundColor: "transparent" },
              }}
            >
              Vegetables
            </MenuItem>
            <MenuItem
              onClick={closeGrocery}
              sx={{
                "&:hover": { color: "#0e544d", backgroundColor: "transparent" },
              }}
            >
              Snacks
            </MenuItem>
          </Menu>
        </Box>

        {/* ================= Right Section: Nav Links + Action Buttons ================= */}
        <Box className="flex items-center text-gray-700">
          {/* Nav Links (hidden on small screens) */}
          <Box className="hidden md:flex space-x-6 mr-10">
            <Button component={Link} to="/shops" sx={navSx}>
              Shops
            </Button>
            <Button component={Link} to="/offers" sx={navSx}>
              Offers
            </Button>
            <Button component={Link} to="/contact" sx={navSx}>
              Contact
            </Button>

            {/* Pages dropdown (hoverable) */}
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

              {/* Pages dropdown menu */}
              <Menu
                anchorEl={pagesAnchorEl}
                open={Boolean(pagesAnchorEl)}
                onClose={closePages}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                MenuListProps={{
                  onMouseEnter: () => openPages(pagesBtnRef.current),
                  onMouseLeave: closePages,
                  sx: { backgroundColor: "white" },
                }}
              >
                <MenuItem
                  onClick={closePages}
                  sx={{
                    "&:hover": {
                      color: "#0e544d",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Flash Sale
                </MenuItem>
                <MenuItem
                  onClick={closePages}
                  sx={{
                    "&:hover": {
                      color: "#0e544d",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Manufacturers/Publishers
                </MenuItem>
                <MenuItem
                  onClick={closePages}
                  sx={{
                    "&:hover": {
                      color: "#0e544d",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Authors
                </MenuItem>
                <MenuItem
                  onClick={closePages}
                  sx={{
                    "&:hover": {
                      color: "#0e544d",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  FAQ
                </MenuItem>
                <MenuItem
                  onClick={closePages}
                  sx={{
                    "&:hover": {
                      color: "#0e544d",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Terms & Conditions
                </MenuItem>
                <MenuItem
                  onClick={closePages}
                  sx={{
                    "&:hover": {
                      color: "#0e544d",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Customer Refund Policy
                </MenuItem>
                <MenuItem
                  onClick={closePages}
                  sx={{
                    "&:hover": {
                      color: "#0e544d",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Vendor Refund Policy
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          {/* Action Buttons (Join / Become a Seller) */}
          <Button
            variant="contained"
            className="!bg-[#10645b] hover:!bg-[#0e544d] normal-case rounded-lg shadow-none !mr-5"
            sx={{ textTransform: "none" }}
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
      </Toolbar>
    </AppBar>
  );
}
