import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useFetch } from "../../hooks";
import { IAllComments, IPost } from "../../interfaces";
import { CommentList, CreateNewComment } from "../comments";

export const Post: FC<IPost> = ({ title, id }) => {
  const [data, loading] = useFetch<IAllComments>({
    url: `http://localhost:4001/post/${id}/comments`,
    method: "GET",
  });

  return (
    <Box mb={3} >
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      <Typography variant="caption" sx={{ fontStyle: "italic" }}>
        {!loading && data.comments && `${data.comments.length} comments`}
      </Typography>
      {!loading && data.comments && <CommentList data={data.comments} />}
      <CreateNewComment postId={id} />
    </Box>
  );
};
