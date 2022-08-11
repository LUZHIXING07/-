import { ref } from "vue";
import axios from "axios";
const getPost = (id) => {
    const post = ref({});

    const load = async () => {
        try {
            let { data } = await axios("http://localhost:3001/posts/" + id);
            post.value = data;
        } catch (error) {
            console.log(error);
        }
    };

    return { post, load }
};

// const showPosts = ref(true);

export default getPost;
