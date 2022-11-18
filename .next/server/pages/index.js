"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,91];
exports.modules = {

/***/ 9220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/Button.jsx



const variantStyles = {
    primary: "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
    secondary: "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
};
function Button_Button({ variant ="primary" , className , href , ...props }) {
    className = clsx("inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none", variantStyles[variant], className);
    return href ? /*#__PURE__*/ _jsx(Link, {
        href: href,
        className: className,
        ...props
    }) : /*#__PURE__*/ _jsx("button", {
        className: className,
        ...props
    });
}

// EXTERNAL MODULE: ./src/components/Card.jsx
var Card = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(7527);
// EXTERNAL MODULE: ./src/components/SocialIcons.jsx
var SocialIcons = __webpack_require__(2792);
;// CONCATENATED MODULE: ./src/images/photos/image-1.jpg
/* harmony default export */ const image_1 = ({"src":"/_next/static/media/image-1.b8daa60f.jpg","height":768,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJQF/8QAHBAAAQMFAAAAAAAAAAAAAAAAEwACEgMVITKR/9oACAEBAAE/ADU7eMbZE2jnq//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAEDAQE/AFv/2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/images/photos/image-3.jpg
/* harmony default export */ const image_3 = ({"src":"/_next/static/media/image-3.2b1a075c.jpg","height":380,"width":380,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIRR/8QAGxABAAEFAQAAAAAAAAAAAAAAAQMAAgURIhL/2gAIAQEAAT8AjzvQkUZya9XaFr//xAAXEQEAAwAAAAAAAAAAAAAAAAABABFB/9oACAECAQE/ACzZ/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhEf/aAAgBAwEBPwB3Iof/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/photos/image-12.jpg
/* harmony default export */ const image_12 = ({"src":"/_next/static/media/image-12.48fb52ad.jpg","height":1691,"width":3000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAgBYf/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACBAUSIoL/2gAIAQEAAT8Ar7EDVsOP03Jf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEhUZH/2gAIAQIBAT8Am3p//8QAGREAAQUAAAAAAAAAAAAAAAAAAAECIVKR/9oACAEDAQE/AIq3EP/Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/photos/image-4.jpg
/* harmony default export */ const image_4 = ({"src":"/_next/static/media/image-4.f5e10df4.jpg","height":724,"width":1086,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAthB//8QAHBAAAgEFAQAAAAAAAAAAAAAAAgMBAAQGEiKB/9oACAEBAAE/AJyB5XR7oWQQsufa/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAA//aAAgBAgEBPwDlEsCm/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEv/aAAgBAwEBPwCqemf/2Q==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/photos/image-5.jpg
/* harmony default export */ const image_5 = ({"src":"/_next/static/media/image-5.c23d1321.jpg","height":3456,"width":4608,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAmQFf/8QAHBABAAIBBQAAAAAAAAAAAAAAAgEDBQARExUx/9oACAEBAAE/AMhjeqVpZr5oshFV7+LX/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAIhA//aAAgBAgEBPwDGpT//xAAaEQACAgMAAAAAAAAAAAAAAAABAgADESIx/9oACAEDAQE/AL0QsMop1HRP/9k=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/images/logos/ing.jpeg
/* harmony default export */ const ing = ({"src":"/_next/static/media/ing.b61dd16e.jpeg","height":100,"width":100,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAKsA03//xAAcEAACAgIDAAAAAAAAAAAAAAABAgMRAAUTYrH/2gAIAQEAAT8A1hiSBjIp5LZuxN+5/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIDADL/2gAIAQIBAT8AWrTnMKByN//EABgRAAMBAQAAAAAAAAAAAAAAAAECAwAy/9oACAEDAQE/ALSV7UJLdb//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/logos/cgi.jpeg
/* harmony default export */ const cgi = ({"src":"/_next/static/media/cgi.910aaced.jpeg","height":100,"width":100,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAgDLP/8QAHBAAAQMFAAAAAAAAAAAAAAAAEQATFAESFSJi/9oACAEBAAE/AK4WNtIfa6F4X//EABkRAAEFAAAAAAAAAAAAAAAAAAEABSEkMf/aAAgBAgEBPwBuFcSdX//EABsRAAEEAwAAAAAAAAAAAAAAAAIAAQQFEiJx/9oACAEDAQE/ALQMJZbE/V//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/logos/energis.jpeg
/* harmony default export */ const energis = ({"src":"/_next/static/media/energis.128c4d5b.jpeg","height":330,"width":330,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKIImf/EABwQAAEDBQAAAAAAAAAAAAAAABMAEhUkMUNis//aAAgBAQABPwCpPkljbOvzX//EABoRAAICAwAAAAAAAAAAAAAAAAECERIAISL/2gAIAQIBAT8Adq15BkTvP//EAB4RAAAGAgMAAAAAAAAAAAAAAAECAxESEwAiI0Fh/9oACAEDAQE/AEErLOQ5YnjqLO3Y+5//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "feed"
const external_feed_namespaceObject = require("feed");
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: ./src/lib/getAllArticles.js
var getAllArticles = __webpack_require__(3622);
;// CONCATENATED MODULE: ./src/lib/generateRssFeed.js





async function generateRssFeed() {
    let articles = await (0,getAllArticles/* getAllArticles */.z)();
    let siteUrl = "https://richard.vanliessum.io/";
    let author = {
        name: "Richard van Liessum",
        email: "contact@vanliessum.io"
    };
    let feed = new external_feed_namespaceObject.Feed({
        title: author.name,
        description: "My personal blog",
        author,
        id: siteUrl,
        link: siteUrl,
        image: `${siteUrl}/favicon.ico`,
        favicon: `${siteUrl}/favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}`,
        feedLinks: {
            rss2: `${siteUrl}/rss/feed.xml`,
            json: `${siteUrl}/rss/feed.json`
        }
    });
    for (let article of articles){
        let url = `${siteUrl}/articles/${article.slug}`;
        let html = server_default().renderToStaticMarkup(/*#__PURE__*/ jsx_runtime_.jsx(article.component, {
            isRssFeed: true
        }));
        feed.addItem({
            title: article.title,
            id: url,
            link: url,
            description: article.description,
            content: html,
            author: [
                author
            ],
            contributor: [
                author
            ],
            date: new Date(article.date)
        });
    }
    await (0,promises_namespaceObject.mkdir)("./public/rss", {
        recursive: true
    });
    await Promise.all([
        (0,promises_namespaceObject.writeFile)("./public/rss/feed.xml", feed.rss2(), "utf8"),
        (0,promises_namespaceObject.writeFile)("./public/rss/feed.json", feed.json1(), "utf8")
    ]);
}

// EXTERNAL MODULE: ./src/lib/formatDate.js
var formatDate = __webpack_require__(3997);
;// CONCATENATED MODULE: ./src/pages/index.jsx




















function MailIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z",
                className: "fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6",
                className: "stroke-zinc-400 dark:stroke-zinc-500"
            })
        ]
    });
}
function BriefcaseIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z",
                className: "fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5",
                className: "stroke-zinc-400 dark:stroke-zinc-500"
            })
        ]
    });
}
function ArrowDownIcon(props) {
    return /*#__PURE__*/ _jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function Article({ article  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
        as: "article",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Title */.Z.Title, {
                href: `/articles/${article.slug}`,
                children: article.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Eyebrow */.Z.Eyebrow, {
                as: "time",
                dateTime: article.date,
                decorate: true,
                children: (0,formatDate/* formatDate */.p)(article.date)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Description */.Z.Description, {
                children: article.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Cta */.Z.Cta, {
                children: "Read article"
            })
        ]
    });
}
function SocialLink({ icon: Icon , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: "group -m-1 p-1",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            className: "h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
        })
    });
}
function Newsletter() {
    return /*#__PURE__*/ _jsxs("form", {
        action: "/thank-you",
        className: "rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40",
        children: [
            /*#__PURE__*/ _jsxs("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ _jsx(MailIcon, {
                        className: "h-6 w-6 flex-none"
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        className: "ml-3",
                        children: "Stay up to date"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
                children: "Get notified when I publish something new, and unsubscribe at any time."
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "mt-6 flex",
                children: [
                    /*#__PURE__*/ _jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        "aria-label": "Email address",
                        required: true,
                        className: "min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                    }),
                    /*#__PURE__*/ _jsx(Button, {
                        type: "submit",
                        className: "ml-4 flex-none",
                        children: "Join"
                    })
                ]
            })
        ]
    });
}
function Resume() {
    let resume = [
        {
            company: "ING",
            title: "Chapter Lead Network",
            logo: ing,
            start: "2008",
            end: {
                label: "Present",
                dateTime: new Date().getFullYear()
            }
        },
        {
            company: "CGI",
            title: "Consultant",
            logo: cgi,
            start: "2002",
            end: "2008"
        },
        {
            company: "Energis",
            title: "Network Engineer",
            logo: energis,
            start: "1999",
            end: "2002"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: "flex text-sm font-semibold text-zinc-900 dark:text-zinc-100",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BriefcaseIcon, {
                        className: "h-6 w-6 flex-none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "ml-3",
                        children: "Work"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                className: "mt-6 space-y-4",
                children: resume.map((role, roleIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: role.logo,
                                    alt: "",
                                    className: "h-7 w-7",
                                    unoptimized: true
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                className: "flex flex-auto flex-wrap gap-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                        className: "w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100",
                                        children: role.company
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Role"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                                        children: role.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                        className: "sr-only",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dd", {
                                        className: "ml-auto text-xs text-zinc-400 dark:text-zinc-500",
                                        "aria-label": `${role.start.label ?? role.start} until ${role.end.label ?? role.end}`,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                dateTime: role.start.dateTime ?? role.start,
                                                children: role.start.label ?? role.start
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                "aria-hidden": "true",
                                                children: "—"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                dateTime: role.end.dateTime ?? role.end,
                                                children: role.end.label ?? role.end
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, roleIndex))
            })
        ]
    });
}
function Photos() {
    let rotations = [
        "rotate-2",
        "-rotate-2",
        "rotate-2",
        "rotate-2",
        "-rotate-2"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-16 sm:mt-20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8",
            children: [
                image_1,
                image_3,
                image_12,
                image_4,
                image_5
            ].map((image, imageIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()("relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl", rotations[imageIndex % rotations.length]),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: image,
                        alt: "",
                        sizes: "(min-width: 640px) 18rem, 11rem",
                        className: "absolute inset-0 h-full w-full object-cover"
                    })
                }, image.src))
        })
    });
}
function Home({ articles  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Richard van Liessum - Lead and Infrastructure engineer."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "I’m Richard, a software designer and entrepreneur based in Rotterdam, the Netherlands. I’m currently working at ING as a Lead and Infrastructure engineer."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-9",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-2xl",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                            children: "Richard van Liessum - Lead & Infrastructure Engineer."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-6 text-base text-zinc-600 dark:text-zinc-400",
                            children: "I’m Richard, a lead and infrastructure engineer based in Rotterdam, the Netherlands."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-6 flex gap-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://twitter.com/rliessum",
                                    "aria-label": "Follow on Twitter",
                                    icon: SocialIcons/* TwitterIcon */.Zm
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://instagram.com/richardvanliessum",
                                    "aria-label": "Follow on Instagram",
                                    icon: SocialIcons/* InstagramIcon */.yu
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://github.com/rliessum",
                                    "aria-label": "Follow on GitHub",
                                    icon: SocialIcons/* GitHubIcon */.fy
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://www.linkedin.com/in/richardvanliessum/",
                                    "aria-label": "Follow on LinkedIn",
                                    icon: SocialIcons/* LinkedInIcon */.nI
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                                    href: "https://www.strava.com/athletes/7203804",
                                    "aria-label": "Follow on Strava",
                                    icon: SocialIcons/* StravaIcon */.T8
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Photos, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-24 md:mt-28",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col gap-16",
                            children: articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(Article, {
                                    article: article
                                }, article.slug))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-10 lg:pl-16 xl:pl-24",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Resume, {})
                        })
                    ]
                })
            })
        ]
    });
}
async function getStaticProps() {
    if (true) {
        await generateRssFeed();
    }
    return {
        props: {
            articles: (await (0,getAllArticles/* getAllArticles */.z)()).slice(0, 4).map(({ component , ...meta })=>meta)
        }
    };
}


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2479:
/***/ ((module) => {

module.exports = require("fast-glob");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,527,834,792,35], () => (__webpack_exec__(9220)));
module.exports = __webpack_exports__;

})();