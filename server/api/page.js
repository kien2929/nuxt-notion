import notion from "../notion";
import notionPublic from "../notion-public";

export default eventHandler((event) => {
  const { url } = getQuery(event);
  return notion.databases
    .query({
      database_id: process.env.NOTION_DB || "",
      filter: {
        and: [
          {
            property: "Status",
            status: {
              equals: "Done",
            },
          },
          {
            property: "Link",
            rich_text: {
              equals: url,
            },
          },
        ],
      },
    })
    .then((data) => data.results[0] || null)
    .then((data) => {
      if (data) return notionPublic.getPage(data.id).then((data) => data.block);
      return undefined;
    });
});
