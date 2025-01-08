'use client'
import React, { useState, useEffect } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Function to add a new comment
  const addComments = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
    }
  };

  return (
    <div>
      <h1 className="text-3x1 font-bold mt-4 text-black">Comment Box</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment"
        className="border border-purple-500 mt-3 w-80 p-2"
      />
      <br />
      <button
        className="bg-blue-500 text-white hover:bg-blue-700 py-3 px-2 mt-3 rounded-md"
        onClick={addComments}
      >
        Add Comment
      </button>
      <div className="mt-2">
        <h2>All Comments:</h2>
        {comments.length === 0 ? (
          <p>No comments yet. Add your comment!</p>
        ) : (
          <ul>
            {comments.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;