import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "@/components/Link";
// import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import { getGameById } from "@/store/slices/GameSlice";

export default function SingleGamePage() {
  const dispatch = useAppDispatch();
  const { singleGame } = useAppSelector((state) => state.games);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      alert("null id");
      return;
    }
    dispatch(getGameById(id));
  }, [id]);

  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h4" fontWeight={600}>
        {`${singleGame?.address} ${
          singleGame?.time ? `- ${singleGame?.time}h` : ""
        } - ${
          singleGame?.date
            ? (singleGame?.date)
                .toString()
                .substring(0, 10)
                .replaceAll("-", "/")
            : ""
        }`}
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h6">{singleGame?.name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">
            No. Players: {singleGame?.numberOfPeople}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">{singleGame?.time}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to={`/editgame/${singleGame?._id}`}>
            <Button variant="contained" disableElevation>
              Edit
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
