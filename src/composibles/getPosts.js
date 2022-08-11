import { ref } from "vue";
import axios from "axios";
const getPosts = () => {
    const posts = ref([]);

    const load = async () => {
        try {
            let { data } = await axios("http://localhost:3001/posts");
            posts.value = data;
        } catch (error) {
            console.log(error);
        }
    };

    return { posts, load }
};

// const showPosts = ref(true);

export default getPosts;
