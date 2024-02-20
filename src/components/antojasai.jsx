import { useEffect } from "react";

const AntojasaiComponent = () => {
  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.text = `var antojasai_config = () => {
      this.layout = 'vertically';
      this.items = 3;

      this.clr1 = '#1E293B';
      this.clr2 = '#1E293B';
      this.clr3 = '#E2E8F0';
      this.clr4 = '#E2E8F0';
      this.clr5 = '#F8FAFC';
      this.clr6 = '#E2E8F0';
    };

    const scriptDocument = document.createElement("script");
    scriptDocument.src = "https://antojasai.com/embed.js?v=1.5";
    scriptDocument.setAttribute("data-timestamp", +new Date());
    (document.head || document.body).appendChild(scriptDocument);
    `;
    document.body.appendChild(scriptElement);

    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []);

  return <div id="antojasai_news"></div>;
};

export default AntojasaiComponent;
