import { Typography, OutlinedInput, Box, Button } from "@mui/material";
import { makeRequest } from "../../api";
import { useForm } from "../../hooks";
import { ICreatePost, IPostForm } from "../../interfaces";

export const CreateNewPost = () => {
  const [formData, onChange, onReset] = useForm<IPostForm>({ title: "" });
  const { title } = formData;

  const onSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim()) {
      alert("title is a must");
      return;
    }

    const response = await makeRequest<ICreatePost>({
      url: "http://localhost:4000/post",
      method: "POST",
      data: { title },
    });

    console.log(response?.data.postId);
    if (response?.status === 201) {
      onReset();
      alert("post created succesfully");
    }
  };

  return (
    <Box component="form" onSubmit={onSubmitForm}>
      <Typography variant="h2" component="h2" mb={2}>
        Create Post
      </Typography>
      <Box display="flex" flexDirection="column" mb={2}>
        <Typography variant="caption">Title</Typography>
        <OutlinedInput
          sx={{ width: 300 }}
          value={title}
          name="title"
          onChange={onChange}
        />
      </Box>
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </Box>
  );
};
