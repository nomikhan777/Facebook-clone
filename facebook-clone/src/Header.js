import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMOreIcon from "@mui/icons-material/ExpandMore";


function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAB4CAMAAACTmw0tAAAAb1BMVEX///8Yd/L4+v8kdvIpePIOdfLt8v0Ab/EAcvJPjPMfefLR3vwAa/EAZPAAafEAYvDn7v3z9v6Kr/fW4vy80PptnfVflfRYkfTe5/w+hPNomvWvxfkyf/O4y/nE1fp0ofWStPcAXvCbu/h+qPamwPi/czlIAAAFC0lEQVR4nO2c7XKqMBCGIachATEFFVBEtMr9X+NB23OqkKwbdAM/eGc6044j3Scfu5tNgufNmjVr1qxZFGJpECQ3BUHKxrbGUttNs8rCSqplKyWrsFydN9uxrcKJBZtjFXEhJOfcv6n9RbZ/R1W2CabeFdumVEr6P5Y/ivtSqbyZcEewRREJqbP9V1JEYT3Nbkj21ZJrm77TEXwZNcnY1vbE9pVAWP/DIKrztHqBbXyFtf5bShwmhJAU+Nb/7YVwKtOZnZW1+VdJdZpEJyR5PMj+VnExgclcqyeOE+yE5WFs+8/2o/9eXJxGNZ9lls6nL5WPORFy8ar9vi+K0cxn4RvsbyfCLh0JoHhh+j4QhOOMouIt7X+VGIXg8jb7W4LMvf2n2MrEdk1zkyFfjS+u7a9t7JfxUoZ5dszKIoziTxX3Vw3xxq3928gid47KQ5Iyxrz257rUXxxOZZeAc7epHd6BqvAQaB7wGXV7aefS/gZrvzSk/WkPwBdnd/avsQEgzg3ppgaAy4UzAGwEE6XJv2sAHA6iA9IDiaMxPukA/Hjvxv40xHkgXpnjqxaA73TT/f1qcCk06Bi1AL46OQFAeiC5Ap6hB/BjF/ZjXaiEkmQDgIv1GctxM0CC+ZkBgIf0SwNsEqTA1MAA4Cv6lKiXxej1xKMwA4AMyQG+9P+5Z4kuPw7Wh9PqpouhGaIvak+6R44gqclsmjCOxY9M3yPPi
          JBT2Jd195uswFTweEG7utxWOPs1UWyFcr88WpMCbJAjiP/pjuUt1nvRFhtxzXgF6I4E7BpaHkkBKuQU6AMgM8CWgBQA6UQ1AH+Q9kdflMF4ja3lDgfwVc9/vVHYKKAB+MACkCZ0pgD6TgA4C3xR2DD2CgDP6exnhQsAwpQ6QPvCVwB2dDt/yc4BgF/RFRmxmdBrPUCYDa3hQMzvJHtxgD8IeIpPV6FbgzVpXoR36qUSD4IexMcCUGlwp+53gwdB/pgSABxCS/yDIHdGOYTgSWwBAO2PUE5i2I1aANTQsoLQjcKBzAIAqm9TBjI4lbAAOAE9QFqdA5M5C4AMyGopkzk4nbYAgNwxaToNLmgsAD6Bx5CWtsAlJR4gWQKPIV1Sgk2HB6iBdoi+SEtzUCjGA5yhMMAJzYcLW3iAI+ALBG1hC9rewANA4YS4tAhlQ2q9uFP3m3cf1TvzQ3hEfOijBBov+pX/0VuR3X0K5dLE5XUwEtwvuPqVOdRyzMGRD1x1dOiamH6Lyctw+xQDAST9IVLcNutQAAfbrCzH1EcHArjY6MZVqAcCuDm1JTGbjQMBXNjv7RG7HMMAHB23SRE16kEAPHRz4Amz1zoIwNWRM8yx7yEADg56/NP26Y7dAAAuaffoH/T01NYAAJcHX58PInsAt0eP23UB7ImsAVwf/vYWsCeyBnCQBHV0BglsAWLojCaRwCsolgDEK3mDoEtkdgDjXAJqCcyJtRWAwwj2KOAinA2AGO0inOeVJgILAEFZTn8mdjSUafEAynhJwo0a/fIGCzD2dVzPdCEaCSBpa+k4BaXmQCsOwHhHyLHO/U7AAPCJvBSgVVB0Z8JzAC7CaTT/t+pI2QEofzOV5v9W59UkMAAX1X5a5l+VHnZLiQDgclntHZUfLMXW+b/X8xgBpIiKxfRa/7+SJhNK6PYHPm4vSIrLKb8g6SYW1Jeq4qILIHhUXerJv6LqR0nddC1t6qk3/axZs2bNmjWC/gJfB0wcMLH7cwAAAABJRU5ErkJggg=="
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Sunny Bhai</h4>
        </div>

        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          < NotificationsActiveIcon/>
        </IconButton>
        <IconButton>
          < ExpandMOreIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
