export default {
    name: 'team',
    title: 'Team',
    type: 'number',
    
    fields: [
        {
            name: 'teamName',
            title: 'Team Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'file',
            options: {
            hotspot: true,
            },
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string',
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'members',
            title: 'Members',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'user' }],
                },
            ],
        },
    ]

};