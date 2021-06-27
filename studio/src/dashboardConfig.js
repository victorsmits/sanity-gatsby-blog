export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60d850325056f0980b54b01e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dyvqtxgk",
                  apiId: "14b24d22-65e7-474e-a30a-ae3fb03aafb1",
                },
                {
                  buildHookId: "60d85032322868925ad17d6b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-r8z9n6gz",
                  apiId: "3b3fb487-55b7-4ab4-ba3c-145f118deef4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/victorsmits/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-r8z9n6gz.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
