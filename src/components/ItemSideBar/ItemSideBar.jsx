/* eslint-disable react/prop-types */
import { ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from './itemSideBar.module.css'

const ItemSideBar = ({ img, url, text }) => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(`/${url}`);
  };

  return (
    <ListItem button onClick={() => handleNavigate(url)} >
      <Typography className={styles.SideBarItemContainer}>
        <img src={img} alt="" />
        Gerenciar {text}
      </Typography>
    </ListItem>
  );
};

export default ItemSideBar;