const actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The name of an actor.',
            validation: (Rule) => Rule.required(),
        },
    ]
}

export default actor;