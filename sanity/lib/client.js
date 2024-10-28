import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: 'sklWb2rs1NUnD6SNaRcmBo5cJMCy8rVTMRiWYX7ui0y6UOi96vvHMB80gvRDv6ejYCjdetY39dVQdAUHGEOfVzGL6gc8WIi3iq4rvMyPj6vbD5lOZwpSXGs8Axsbtr30S0Ku5VgCOnxSMHbY8tvWWSOfugrj2iOg7PBb61KttuWEotFaq5xz', // Set to false if statically generating pages, using ISR or tag-based revalidation
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
