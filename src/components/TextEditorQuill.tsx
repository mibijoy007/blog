'use client'

import React from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default function TextEditorQuill()  {
  
    const theme = 'snow';
    // const theme = 'bubble';
  
    const modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
      ],
    };
  
    const placeholder = 'Compose an epic...';
  
    const formats = ['bold', 'italic', 'underline', 'strike'];
  
    const { quillRef } = useQuill({ theme, modules, formats, placeholder });
  return (
    <div style={{ width: 500, height: 300, border: 0 }}>
      <div ref={quillRef} />
    </div>
  );
};