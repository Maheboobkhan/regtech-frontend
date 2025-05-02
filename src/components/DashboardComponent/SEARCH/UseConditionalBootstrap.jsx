import { useEffect } from "react";

const useConditionalBootstrap = () => {
  useEffect(() => {
    // Load Bootstrap CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    link.id = "bootstrap-css";
    document.head.appendChild(link);

    // const style = document.createElement("style");
    // style.type = "text/css";
    // style.id = "custom-css";
    // style.innerHTML = ` a[href="/chat"] { color: white !important; } a[href="/dashboard/profile"], a[href="/dashboard/profile"] h3.font-bold { color: white !important; }`;
    // document.head.appendChild(style);

    const style = document.createElement("style");
style.type = "text/css";
style.id = "custom-css";
style.innerHTML = `
  a[href="/chat"] { color: white !important; }
  a[href="/dashboard/profile"] { color: white !important; }
  a[href="/dashboard/profile"] h3.font-bold { color: white !important; font-size: 18px; }
  .sidebar-transition ul a { text-decoration: none !important; padding: 0px;}
  .sidebar-transition ul a div { padding: 12px 0px !important; }
`;
document.head.appendChild(style);

    return () => {
      // Remove Bootstrap CSS when the component unmounts
      const bootstrapLink = document.getElementById("bootstrap-css");
      if (bootstrapLink) {
        document.head.removeChild(bootstrapLink);
      }
    };
  }, []);
};

export default useConditionalBootstrap;
