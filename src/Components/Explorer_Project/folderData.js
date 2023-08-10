const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              name: "index.js",
              isFolder: false
            },
            {
              name: "script.js",
              isFolder: false
            },
            {
              name: "style.js",
              isFolder: false
            }
          ]
        },
        {
          name: "public_nested_file",
          isFolder: true
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "public_Eshwar",
          isFolder: true,
          items: [
            {
              name: "app.js",
              isFolder: false
            },
            {
              name: "component.js",
              isFolder: false
            },
            {
              name: "increment.js",
              isFolder: false
            }
          ]
        },
        {
          name: "public_nested_file",
          isFolder: false
        }
      ]
    },
    {
      name: "package.json",
      isFolder: true
    }
  ]
};

export default explorer;
