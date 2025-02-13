"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { client } from "../../sanity/lib/client";
import toast from "react-hot-toast";
import { FaBackspace } from "react-icons/fa";
import { IoMdTrash, IoMdSend } from "react-icons/io";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { BiLoaderCircle } from "react-icons/bi";

// Define Comment Type
interface Comment {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export default function CommentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState<Comment[]>([]); // Type added
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data: Comment[] = await client.fetch(`*[_type == "comment"]{_id, name, email, message} | order(_createdAt desc)`);
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      try {
        await client.create({ _type: "comment", ...formData });
        toast.success("Comment submitted successfully!");
        setFormData({ name: "", email: "", message: "" });

        const updatedComments: Comment[] = await client.fetch(`*[_type == "comment"]{_id, name, email, message} | order(_createdAt desc)`);
        setComments(updatedComments);
      } catch (err) {
        toast.error("Failed to submit comment. Try again!");
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  const handleDelete = async (id: string) => {
    try {
      await client.delete(id);
      toast.success("Comment deleted successfully!");
      setComments(comments.filter((comment) => comment._id !== id));
    } catch (err) {
      toast.error("Failed to delete comment!");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="flex-1 overflow-auto p-6 w-full max-w-2xl">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-yellow-600 hover:underline mt-10">
          Go back <TbArrowBackUpDouble size={25} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">All Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} className="p-4 border-b flex gap-4 items-center">
              <div className="w-10 h-10 bg-yellow-500 text-white flex items-center justify-center rounded-full text-lg font-bold">
                {comment.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <p className="font-bold">{comment.name}</p>
                <p className="text-sm text-gray-600">{comment.email}</p>
                <p className="mt-1">{comment.message}</p>
              </div>
              <button onClick={() => handleDelete(comment._id)} className="bg-red-500 p-1 rounded-full text-white hover:text-red-700">
                <IoMdTrash />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center">No comments yet!</p>
        )}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md border-t flex justify-center">
        <div className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="p-2 border rounded-md w-full" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="p-2 border rounded-md w-full" />
            </div>
            <div className="flex gap-2">
              <input type="text" name="message" placeholder="Write a comment..." value={formData.message} onChange={handleChange} required className="flex-1 p-2 border rounded-md" />
              <button
                type="submit"
                disabled={loading}
                className="flex justify-center items-center bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-700"
              >
                {loading ? <BiLoaderCircle size={25} className="animate-spin" /> : <IoMdSend size={20} />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
