import { createID } from '@/utils/animations'
import { defineArrayMember, defineField } from 'sanity'

// Define the structure of FormSchemaProps used for defining the form schema
interface FormSchemaProps {
  name?: string // The name of the form schema
  title?: string // The title of the form schema
  group?: string | undefined // The title of the form schema
}

// Function to create a form schema
export function schemaLib_form({
  name = 'form',
  title = 'Form',
  group,
}: FormSchemaProps) {
  // Define the form schema using sanity's schema definition functions
  const form = defineField({
    name: name,
    title: title,
    type: 'object',
    group: group,
    // Define fields within the form
    fields: [
      // Form Settings Section
      defineField({
        name: 'formSettings',
        title: 'Form Settings',
        type: 'object',
        options: { collapsible: true, collapsed: false },
        fields: [
          // Form ID Field
          defineField({
            name: 'id',
            title: 'id',
            type: 'string',
            description: 'Add the formSpree id here',
            validation: (Rule) => Rule.required(),
          }),

          // Form CSS Class Field
          defineField({
            name: 'cssClass',
            title: 'Form CSS Class',
            type: 'string',
            description: 'Add the form CSS Class',
            validation: (Rule) => Rule.required(),
          }),

          // Use CSS Modules Field
          defineField({
            name: 'useCSSmodules',
            title: 'Use CSS Modules',
            type: 'boolean',
            initialValue: false,
          }),
        ],
      }),

      // Form Fields Section
      defineField({
        name: 'fields',
        title: 'fields',
        type: 'array',
        of: [
          // Individual Field Definition
          defineArrayMember({
            name: 'field',
            title: 'field',
            type: 'object',
            fields: [
              // Field Name
              defineField({
                name: 'fieldName',
                title: 'Field Name',
                type: 'string',
                validation: (Rule) => Rule.required(),
              }),

              // Field Placeholder
              defineField({
                name: 'placeholder',
                title: 'Field Placeholder',
                type: 'string',
                description: 'Leave empty if you dont want a placeholder',
              }),

              // HTML Field Type
              defineField({
                name: 'HTMLfield',
                title: 'HTML field',
                type: 'string',
                options: {
                  list: [
                    { title: 'Input', value: 'input' },
                    { title: 'Textarea', value: 'textarea' },
                  ],
                },
                validation: (Rule) => Rule.required(),
              }),

              // Field Type
              defineField({
                name: 'type',
                title: 'Field Type',
                type: 'string',
                options: {
                  list: [
                    { title: 'Text', value: 'text' },
                    { title: 'Email', value: 'email' },
                  ],
                },
                validation: (Rule) =>
                  Rule.custom((field, context) => {
                    //@ts-ignore
                    if (context.parent.HTMLfield === 'input') {
                      // If 'HTMLfield' is 'input', then 'type' should be required
                      return field
                        ? true
                        : 'Type is required when HTMLfield is set to "input"'
                    }
                    // If 'HTMLfield' is not 'input', no validation is needed for 'type'
                    return true
                  }),
              }),

              // Field ID (Slug)
              defineField({
                name: 'slug',
                title: 'ID (Slug)',
                type: 'slug',
                options: {
                  source: (doc, context) => {
                    //@ts-ignore
                    return `${context.parent.HTMLfield}-${
                      //@ts-ignore
                      context.parent.type
                        ? //@ts-ignore
                          context.parent.type
                        : ''
                      //@ts-ignore
                    }-${context.parent.fieldName}-${createID(5)}`
                  },
                },
              }),

              // CSS Class for Div Block
              defineField({
                name: 'cssClassDiv',
                title: 'CSS class Div Block',
                type: 'string',
                description: 'Add a class for the Div Block wrapping the field',
              }),

              // CSS Class for Input Field
              defineField({
                name: 'cssClassField',
                title: 'CSS class',
                type: 'string',
                description: 'Add a class for the input field',
              }),

              // Validation Configuration
              defineField({
                name: 'validation',
                title: 'Validation',
                type: 'object',
                options: { collapsible: true, collapsed: true },
                fields: [
                  // Required Field
                  defineField({
                    name: 'required',
                    title: 'Required',
                    type: 'boolean',
                    initialValue: false,
                  }),

                  // Validation Prefix
                  defineField({
                    name: 'prefix',
                    title: 'Prefix',
                    type: 'string',
                    validation: (Rule) =>
                      Rule.custom((prefix, context) => {
                        //@ts-ignore
                        if (context.parent.required && !prefix) {
                          return 'Prefix is required when "Required" is true'
                        }
                        return true // No validation error
                      }),
                  }),
                ],
              }),

              // Field Label Configuration
              defineField({
                name: 'label',
                title: 'Label',
                type: 'object',
                options: { collapsible: true, collapsed: true },
                fields: [
                  // Add Label Option
                  defineField({
                    name: 'hasLabel',
                    title: 'Add Label',
                    type: 'boolean',
                    initialValue: false,
                  }),

                  // Label Title
                  defineField({
                    name: 'labelTitle',
                    title: 'Title',
                    type: 'string',
                    validation: (Rule) =>
                      Rule.custom((prefix, context) => {
                        //@ts-ignore
                        if (context.parent.hasLabel && !prefix) {
                          return 'Prefix is required when "Required" is true'
                        }
                        return true // No validation error
                      }),
                  }),

                  // CSS Class for Label
                  defineField({
                    name: 'cssClass',
                    title: 'CSS Class',
                    type: 'string',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })

  return form // Return the defined form schema
}
