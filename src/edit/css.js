import insertCSS from "insert-css"

insertCSS(`

.ProseMirror {
  border: 1px solid silver;
  position: relative;
}

.ProseMirror-content {
  padding: 4px 8px 4px 14px;
  white-space: pre-wrap;
  line-height: 1.2;
}

.ProseMirror-content p,
.ProseMirror-content li,
.ProseMirror-content h1,
.ProseMirror-content h2,
.ProseMirror-content h3,
.ProseMirror-content h4,
.ProseMirror-content h5,
.ProseMirror-content h6,
.ProseMirror-content pre {
  min-height: 1.2em;
}

.ProseMirror-content ul.tight p, .ProseMirror-content ol.tight p {
  margin: 0;
}

/* Kludge to work around https://code.google.com/p/chromium/issues/detail?id=466148&thanks=466148&ts=1426090625 */
.ProseMirror-content li p:empty:after {
  content: "";
  display: block;
}

.ProseMirror-content ul, .ProseMirror-content ol {
  padding-left: 2em;
}

.ProseMirror-content blockquote {
  padding-left: 1em;
  border-left: 3px solid #eee;
  margin-left: 0; margin-right: 0;
}

.ProseMirror-content pre {
  white-space: pre-wrap;
}

`)