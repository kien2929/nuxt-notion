import notion from '../notion'

export default eventHandler(() => {
  return notion.databases.query({
    database_id: process.env.NOTION_DB || '',
    filter: {
      property: "Status",
      status: {
        equals: "Done",
      },
    },
    sorts: [
      {
        timestamp: "created_time",
        direction: "descending",
      },
    ],
  })
    .then(data => data.results)
    .then(data => data.map(item => ({
      id: item.id || '',
      name: String(item.properties.Name.title[0].plain_text) || '',
      description: String(item.properties.Content.rich_text[0].text.content) || '',
      link: '/blogs/' + item.properties.Link.rich_text[0].text.content || '',
      date: String(item.created_time) || '',
    })))
})
