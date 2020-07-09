import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ width: "100%" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};
