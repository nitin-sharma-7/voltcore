import "./globals.css";

export const metadata = {
  title: "Solaria - Solar Energy HTML Template",
  description: "Solaria - Ecology & Solar Energy HTML Template",
  icons: {
    icon: '/images/icon.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="author" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/swiper.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/colors/scheme-1.css" />
        <style>{`
          .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        `}</style>
      </head>
      <body>
        {children}

        <script src="/js/plugins.js"></script>
        <script src="/js/designesia.js"></script>
        <script src="/js/swiper.js"></script>
        <script src="/js/custom-swiper-1.js"></script>
        <script src="/js/custom-marquee.js"></script>
      </body>
    </html>
  );
}