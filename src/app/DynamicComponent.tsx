import { useEffect } from 'react';
import { marked } from "marked"
import { defaultText } from "./text"
import styles from './page.module.css'


export default function DynamicComponent() {

  useEffect(() => {
    handleChange({ target : { value: defaultText}});
  }, []);

  const handleChange = (event: any) => {
    const converted_markdown = marked.parse(event.target.value);
    const previewElement = document.getElementById("preview");
    if (previewElement) { previewElement.innerHTML = converted_markdown; }
  }

  return (
    <div>
      <div className={styles.editor}>
        <h1 className={styles.sectionTitle}>Editor</h1>
        <textarea id="editor" defaultValue={defaultText} onChange={handleChange}></textarea>
      </div>
      <div className={styles.preview}>
        <h1 className={styles.sectionTitle}>Previewer</h1>
        <div id="preview" className={styles.previewer}></div>
      </div>
    </div>
  )
}
