import { CopyBlock, dracula } from "react-code-blocks";

interface props {
  header: string;
  description: string;
  text: string
}

const CodeComponent = ({ header, description, text }: props) => {
  return (
    <div>
      <div>
        <p className="mt-[20px] text-[20px]">{header}</p>
        <p className="mt-[20px]">{description}</p>
      </div>
      <CopyBlock
        text={text}
        language="typescript"
        showLineNumbers={true}
        theme={dracula}
        codeBlock={true}
      />
    </div>
  );
};

export default CodeComponent;
