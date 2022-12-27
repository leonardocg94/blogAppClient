import { Grid } from "@mui/material";
import { FC } from "react";
import { IPost } from "../../interfaces";
import { Post } from "./Post";

interface Props {
  data: IPost[];
}

export const PostList: FC<Props> = ({ data }) => {
  return (
    <Grid container columnGap={2} columnSpacing={2}>
      {data &&
        data.length > 0 &&
        data.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
            <Post {...post} />
          </Grid>
        ))}
    </Grid>
  );
};
