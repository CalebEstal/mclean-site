// src/lib/queries.ts
export const PRODUCTS_QUERY = `
  query Products {
    products(first: 12) {
      edges {
        node {
          id
          handle
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
          }
        }
      }
    }
  }
`;
