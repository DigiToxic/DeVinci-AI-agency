import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(d, t) {
        var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '65007d14fbe0de0007b8ab29' },
            url: 'https://general-runtime.voiceflow.com/',
            versionID: 'production'
          }).then(() => {
            setTimeout(function () {
              window.voiceflow.chat.open();
            }, 500);
          });
        };
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        v.type = "text/javascript"; 
        s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
    document.body.appendChild(script);
  }, []);

  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
