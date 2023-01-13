export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content'
    },
    {
      title: 'Launch Scedule At',
      name: 'LaunchAt',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 20,
        calendarTodayLabel: 'Today'
      }
    }
  ]
}