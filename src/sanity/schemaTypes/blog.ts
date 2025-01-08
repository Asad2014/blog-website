 import {defineType, defineField, defineArrayMember} from 'sanity'

 export const blog = defineType ({
     name: "blog",
     title: "blog",
     type: "document",


 fields: [
       defineField ({
       name: "title",
       type: "string",
       title: "Title",
     }),

        defineField ({
        name: "paragraph",
        type: "text",
        title: "paragraph",
        
     }),

       defineField ({  
        title: "slug",
        name: "slug",
        type: "slug",
        options: {
            source: 'title',
        },
     }),

        defineField ({  
        title: 'image',
        name: 'image',
        type: 'image',
        options: {
          hotspot: true
        },
    }),

         defineField ({  
         title: 'block', 
         name: 'block',
         type: 'array', 
         of: [{type: 'block'}]
    }),
  ],
})


