import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import admin from "../../assets/images/admin.jpg";
import userImage from "../../assets/images/user.webp";
import { useGetUsersQuery } from "../../context/createUser";
import Container from "@mui/material/Container";
import Loading from "../../components/loading/Loading";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Users = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { data, error } = useGetUsersQuery();

  if (error) {
    alert(error.message);
  }
  if (!data) {
    return <Loading />;
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let users = data?.data?.map((user) => (
    <Card key={user.id} sx={{ maxWidth: 355 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.role === "admin" ? <h2>A</h2> : <h2>U</h2>}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.CreatedAt}
        subheader={user.UpdatedAt}
      />
      {user.role === "admin" ? (
        <CardMedia
          component="img"
          height="230"
          image={admin}
          alt="Admin-image"
        />
      ) : (
        <CardMedia
          component="img"
          height="230"
          image={userImage}
          alt="user-image"
        />
      )}

      <CardContent>
        <div variant="body2" color="text.secondary">
          <div>
            <b>
              role: <span>{user.role}</span>
            </b>
            <br />
            <br />
            <p>
              Name: <span>{user.FirstName}</span>
            </p>
            <br />{" "}
            <p>
              Surename: <span>{user.LastName}</span>
            </p>
            <br />
            <p>
              tel: <span>{user.phones}</span>
            </p>
          </div>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
    </Card>
  ));
  return (
    <Container maxWidth="xl">
      {" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Users</h1>
      <br />
      <br />
      <br />
      <div className="users">{users}</div>
    </Container>
  );
};

export default Users;
