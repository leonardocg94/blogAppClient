import { Box, Typography, OutlinedInput, Button } from "@mui/material";
import { FC } from "react";
import { makeRequest } from "../../api";
import { useForm } from "../../hooks";
import { ICommentForm, ICreateComment } from "../../interfaces";

interface Props {
  postId: string;
}
export const CreateNewComment: FC<Props> = ({ postId }) => {
  const [formData, onChange, onReset] = useForm<ICommentForm>({ content: "" });
  const { content } = formData;

  const onSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!content.trim()) {
      alert("content is a must");
      return;
    }

    const response = await makeRequest<ICreateComment>({
      url: `http://localhost:4001/post/${postId}/comments`,
      method: "POST",
      data: { content },
    });
    console.log(response?.data.commentId);
    if (response?.status === 201) {
      onReset();
      alert("commentario created succesfully");
    }
  };

  return (
    <Box component="form" onSubmit={onSubmitForm}>
      <Box display="flex" flexDirection="column">
        <Typography variant="caption" component="label">
          Comment
        </Typography>
        <OutlinedInput
          sx={{ width: 250, mb: 2 }}
          onChange={onChange}
          name="content"
          value={content}
        />
      </Box>
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </Box>
  );
};
