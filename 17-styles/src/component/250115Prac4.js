import React, { useEffect, useState } from 'react';
import '../styles/250115Prac4.scss';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    // const fakePosts = [
    //     {
    //         id: 1,
    //         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //         body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    //     },
    //     {
    //         id: 2,
    //         title: 'qui est esse',
    //         body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    //     },
    //     {
    //         id: 3,
    //         title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    //         body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
    //     },
    //     {
    //         id: 4,
    //         title: 'eum et est occaecati',
    //         body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
    //     },
    //     {
    //         id: 5,
    //         title: 'nesciunt quas odio',
    //         body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque',
    //     },
    //     {
    //         id: 6,
    //         title: 'dolorem eum magni eos aperiam quia',
    //         body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
    //     },
    //     {
    //         id: 7,
    //         title: 'magnam facilis autem',
    //         body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
    //     },
    //     {
    //         id: 8,
    //         title: 'dolorem dolore est ipsam',
    //         body: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
    //     },
    //     {
    //         id: 9,
    //         title: 'nesciunt iure omnis dolorem tempora et accusantium',
    //         body: 'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
    //     },
    //     {
    //         id: 10,
    //         title: 'optio molestias id quia eum',
    //         body: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
    //     },
    // ];

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setPosts(fakePosts);
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            const getPosts = async () => {
                try {
                    const response = await fetch(
                        'https://jsonplaceholder.typicode.com/posts',
                    );
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setPosts(data); // 여기서 상태 업데이트
                } catch (err) {
                    console.error(err);
                }
            };
            getPosts();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="post-page">
            <header>Posts</header>
            <div className="post-container">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div className="post-card" key={post.id}>
                            <div className="card-title">
                                <div className="title-number">No.{post.id}</div>
                                <div className="title-line">{post.title}</div>
                            </div>
                            <div className="card-content">{post.body}</div>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}
