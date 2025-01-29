'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaUserLarge } from 'react-icons/fa6';
import { GiWoodenChair } from 'react-icons/gi';
import { client } from '../../../sanity/lib/client';

interface BlogPost {
  title: string;
  author: string;
  category: string;
  date: string;
  slug: {
    current: string;
  };
  mainImage: string;
  
  content: string;
}

interface Comment {
  _id: string;
  name: string;
  message: string;
}

function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params; // Access the dynamic route parameter
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState({ name: '', message: '' });
  const [editComment, setEditComment] = useState<Comment | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const postQuery = `
          *[_type == "blogPost" && slug.current == $id][0] {
            title,
            author,
            category,
            date,
            "mainImage": mainImage.asset->url,
            content
          }
        `;
        const relatedPostsQuery = `
          *[_type == "blogPost" && slug.current != $id][0...3] {
            title,
            "mainImage": mainImage.asset->url,
            slug
          }
        `;
        const commentsQuery = `
          *[_type == "comment" && post._ref == $id] | order(_createdAt asc) {
            _id,
            name,
            message
          }
        `;

        try {
          const [postData, relatedPostsData, commentsData] = await Promise.all([
            client.fetch(postQuery, { id }),
            client.fetch(relatedPostsQuery, { id }),
            client.fetch(commentsQuery, { id }),
          ]);

          setPost(postData);
          setRelatedPosts(relatedPostsData);
          setComments(commentsData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editComment) {
      // Update existing comment
      try {
        await client.patch(editComment._id).set({ name: newComment.name, message: newComment.message }).commit();
        setComments((prev) =>
          prev.map((comment) =>
            comment._id === editComment._id ? { ...comment, name: newComment.name, message: newComment.message } : comment
          )
        );
        setEditComment(null);
        setNewComment({ name: '', message: '' });
      } catch (error) {
        console.error('Error updating comment:', error);
      }
    } else {
      // Add new comment
      try {
        const newCommentData = {
          _type: 'comment',
          post: { _type: 'reference', _ref: id },
          name: newComment.name,
          message: newComment.message,
        };
        const createdComment = await client.create(newCommentData);
        setComments([...comments, { _id: createdComment._id, ...newComment }]);
        setNewComment({ name: '', message: '' });
      } catch (error) {
        console.error('Error submitting comment:', error);
      }
    }
  };

  const handleCommentDelete = async (commentId: string) => {
    try {
      await client.delete(commentId);
      setComments((prev) => prev.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleCommentEdit = (comment: Comment) => {
    setEditComment(comment);
    setNewComment({ name: comment.name, message: comment.message });
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center">Post not found!</div>;
  }

  return (
    <div className="max-w-screen-lg mt-28 mx-auto px-4 py-8">
      {/* Post Content */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-500 space-x-4 text-sm mb-6">
        <div className="flex items-center space-x-1">
          <FaUserLarge />
          <span>{post.author || 'Admin'}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaCalendar />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center space-x-1">
          <GiWoodenChair />
          <span>{post.category}</span>
        </div>
      </div>
      <Image
        src={post.mainImage}
        alt={`Image for ${post.title}`}
        width={800}
        height={400}
        className="w-full h-[400px] rounded-lg object-cover mb-6"
      />
      <div className="text-gray-700 leading-relaxed">
        {post.content}
      </div>

      {/* Related Posts */}
      <h2 className="text-2xl font-semibold mt-12 mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {relatedPosts.map((relatedPost) => (
    <Link
      key={relatedPost.slug.current}  // Using relatedPost.slug.current for unique key
      href={`/blog/${relatedPost.slug.current}`}
      className="block bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
    >
      <Image
        src={relatedPost.mainImage}
        alt={`Image for ${relatedPost.title}`}
        width={300}
        height={200}
        className="w-full h-40 rounded-t-lg object-cover"
      />
      
      <h3 className="text-lg font-bold p-4">{relatedPost.title}</h3>
    </Link>
  ))}
</div>

      {/* Comment Section */}
      {/* <h2 className="text-2xl font-semibold mt-12 mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Comment"
            value={newComment.message}
            onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editComment ? 'Update Comment' : 'Submit Comment'}
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="bg-gray-100 p-4 rounded-lg shadow">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.message}</p>
            <div className="flex space-x-2 mt-2">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => handleCommentEdit(comment)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleCommentDelete(comment._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default BlogPostPage;
