const movie = {
    name: 'movie',
    title: 'Movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the movie.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'actor',
            title: 'Actor',
            type: 'reference',
            to: [{type: 'actor'}],
            validation: (Rule) => Rule.required(),
        },
    ]
};

export default movie;