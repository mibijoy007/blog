'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const TextEditorTap = () => {
  const editor = useEditor()


  return <EditorContent editor={editor} />
}

export default TextEditorTap
