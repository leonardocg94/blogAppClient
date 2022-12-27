import { FC } from "react";
import { List, ListItem, Typography } from "@mui/material";

import { IComment } from "../../interfaces";

interface Props {
  data: IComment[];
}
export const CommentList: FC<Props> = ({ data }) => {
  return (
    <List>
      {data &&
        data.length > 0 &&
        data.map((comment) => (
          <ListItem key={comment.id}>
            <Typography>{comment.content}</Typography>
          </ListItem>
        ))}
    </List>
  );
};
