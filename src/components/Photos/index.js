import "./index.scss";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  ImageList,
  ImageListItem,
  Button,
  TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const data = [
  {
    id: 1,
    title: "Image 1",
    imagelink:
      "https://pixabay.com/photos/flowers-daisy-petals-nature-flora-7945521",
  },
  {
    id: 2,
    title: "Image 2",
    imagelink:
      "https://pixabay.com/photos/tree-catkins-willow-catkins-nature-7136081/",
  },
  {
    id: 3,
    title: "Image 3",
    imagelink:
      "https://pixabay.com/illustrations/flowers-daisies-pattern-print-7935942/",
  },
  {
    id: 4,
    title: "Image 4",
    imagelink:
      "https://pixabay.com/photos/camping-picnic-lunch-dining-travel-7947056/",
  },
  {
    id: 5,
    title: "Image 5",
    imagelink: "https://example.com/image5.jpg",
  },
  {
    id: 6,
    title: "Image 6",
    imagelink: "https://example.com/image6.jpg",
  },
  {
    id: 7,
    title: "Image 7",
    imagelink: "https://example.com/image7.jpg",
  },
  {
    id: 8,
    title: "Image 8",
    imagelink: "https://example.com/image8.jpg",
  },
  {
    id: 9,
    title: "Image 9",
    imagelink: "https://example.com/image9.jpg",
  },
  {
    id: 10,
    title: "Image 10",
    imagelink: "https://example.com/image10.jpg",
  },
  {
    id: 11,
    title: "Image 11",
    imagelink: "https://example.com/image11.jpg",
  },
];

const useStyles = makeStyles({
  text: {
    marginTop: "70px",
    textAlign: "center",
  },
});

const Photos = () => {
  const classOne = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classOne.text}>
        <Typography variant="h3">Our Latest Version of Photography</Typography>
        <Typography paragraph>
          Pleasure to take your photos as well, Please fill below form for any
          requests.
        </Typography>
      </Container>
      {/* <Container>
        <ImageList rowHeight={80} col="2">
          {data.map((e) => (
            <ImageListItem key={e.id}>
              <img src={e.imagelink} alt={e.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container> */}
      <center>
        <Container style={{ marginTop: "20px" }}>
          <form>
            <TextField type="text" label="Name" variant="outlined" /> <br />
            <TextField type="text" label="email" variant="outlined" /> <br />
            <TextField type="text" label="Password" variant="outlined" /> <br />
            <Button variant="contained">Cotact Form</Button>
          </form>
        </Container>
      </center>
    </div>
  );
};

export default Photos;
