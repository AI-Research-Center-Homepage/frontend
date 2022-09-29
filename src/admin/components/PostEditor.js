import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const PostEditor = ({ editorRef }) => {
  return (
    <Editor
      ref={editorRef} // DOM 선택용 useRef
      placeholder="내용을 입력해주세요."
      previewStyle="vertical" // 미리보기 스타일 지정
      height="800px" // 에디터 창 높이
      initialEditType="wysiwyg" //
      toolbarItems={[
        // 툴바 옵션 설정
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
      useCommandShortcut={false} // 키보드 입력 컨트롤 방지
      // 입력창에 입력한 내용을 HTML 태그 형태로 취득: editorRef.current?.getInstance().getHTML();
      // 입력창에 입력한 내용을 MarkDown 형태로 취득: editorRef.current?.getInstance().getMarkdown()
    ></Editor>
  );
};

export default PostEditor;
