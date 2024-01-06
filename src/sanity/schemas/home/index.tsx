import {
  array,
  boolean,
  i18Document,
  metadata,
  nextImage,
  object,
  richText,
  string,
  url,
} from '@/sanity/lib'
import { Share1Icon } from '@radix-ui/react-icons'
import { defineType } from 'sanity'

const schemaHome = defineType({
  type: 'document',
  name: 'home',
  title: 'Home',
  options: { languageFilter: true },
  groups: [
    {
      name: 'metadata',
      title: 'Metadata',
      icon: () => <Share1Icon />,
    },
  ],
  fields: [
    i18Document(),
    //Hero
    string({ name: 'title', title: 'Title' }),
    richText({ name: 'heroDesc', title: 'Hero Description', textOnly: true }),
    //About
    string({ name: 'aboutTitle', title: 'About Title' }),
    richText({ name: 'aboutDesc', title: 'About Description', textOnly: true }),
    nextImage({ name: 'aboutImage', title: 'About Image' }),
    //Team
    object({
      name: 'teamDeafult',
      options: { columns: 3 },
      fields: [
        string({ name: 'teamBtnInfo', title: 'Button Info' }),
        string({ name: 'teamBtnActivity', title: 'Button Activity' }),
        string({ name: 'teamBtnLanguages', title: 'Button Languages' }),
        string({ name: 'contactText', title: 'Contact Text' }),
      ],
    }),
    array({
      name: 'team',
      title: 'Team',
      of: [
        object({
          name: 'member',
          title: 'Member',
          fields: [
            string({ name: 'name', title: 'Name' }),
            string({ name: 'position', title: 'Position' }),
            boolean({ name: 'showInfo', title: 'Show Info' }),

            boolean({ name: 'showActivity', title: 'Show Activity' }),
            boolean({ name: 'showLanguages', title: 'Show Languages' }),
            nextImage({ name: 'image1', title: 'Image 1' }),
            nextImage({ name: 'image2', title: 'Image 2' }),
            richText({ name: 'info', title: 'Info', textOnly: true }),
            richText({ name: 'activity', title: 'Activity', textOnly: true }),
            richText({ name: 'languages', title: 'Languages', textOnly: true }),
            string({ name: 'email', title: 'Email' }),
          ],
        }),
      ],
    }),
    //Services
    string({ name: 'servicesTitle', title: 'Services Title' }),
    string({ name: 'servicesModalTitle', title: 'Services Modal Title' }),
    string({ name: 'servicesButtonText', title: 'Services Button Text' }),
    richText({
      name: 'servicesDesc',
      title: 'Services Description',
      textOnly: true,
    }),
    richText({
      name: 'servicesActivity',
      title: 'Services Activity',
      textOnly: true,
    }),
    array({
      name: 'services',
      title: 'Services',
      of: [
        object({
          name: 'service',
          title: 'Service',
          fields: [
            string({ name: 'title', title: 'Title' }),
            string({ name: 'id', title: 'id' }),
            richText({
              name: 'description',
              title: 'Description',
              textOnly: true,
            }),
          ],
        }),
      ],
    }),

    //Contact
    string({ name: 'contactTitle', title: 'Contact Title' }),
    richText({
      name: 'contactDesc',
      title: 'Contact Description',
      textOnly: true,
    }),
    string({ name: 'email', title: 'Email' }),
    string({ name: 'phone', title: 'Phone' }),
    string({ name: 'address', title: 'Address' }),
    url({ name: 'addressUrl', title: 'Address google map url' }),

    //Metadata
    metadata({
      group: 'metadata',
      options: { collapsed: true, collapsible: true },
    }),
  ],
})

export default schemaHome
