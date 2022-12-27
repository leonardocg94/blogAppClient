import { Box, Divider, ThemeProvider, Typography } from "@mui/material";

import { CreateNewPost, PostList } from "./components/posts";
import { theme } from "./theme";
import { IAllPosts, IPost } from "./interfaces";
import { useFetch } from "./hooks";

const App = () => {
  const [data, loading] = useFetch<IAllPosts>({
    url: "http://localhost:4000/post",
    method: "GET",
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{ width: "1200px", maxWidth: "95%", mx: "auto" }}
      >
        <CreateNewPost />
        <Divider sx={{ my: 3 }} />
        {loading ? (
          <Typography variant="h2" mt={5} textAlign="center">
            Loading...
          </Typography>
        ) : (
          <PostList data={data.posts} />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
