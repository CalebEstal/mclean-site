// src/app/shop/page.tsx
import Link from "next/link";
import { shopifyFetch } from "@/lib/shopify";

const PRODUCTS_QUERY = `
  query Products {
    products(first: 12) {
      edges {
        node {
          id
          handle
          title
          priceRange {
            minVariantPrice {
              amount
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

export default async function ShopPage() {
  const data = await shopifyFetch<any>({ query: PRODUCTS_QUERY });
  const products = data.products.edges;

  return (
    <main className="bg-neutral-50">
      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight mb-4 text-neutral-900">
            Shop
          </h1>
          <p className="text-neutral-600 leading-relaxed">
            Custom furniture designed and built in our Central Illinois workshop.
            Pricing includes freight shipping within the continental U.S.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-24">
          {products.map(({ node }: any) => (
            <Link key={node.id} href={`/shop/${node.handle}`} className="group">
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-6">
                {node.featuredImage && (
                  <img
                    src={node.featuredImage.url}
                    alt={node.featuredImage.altText ?? node.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <div className="space-y-1">
                <h2 className="text-lg font-medium tracking-tight text-neutral-900">
                  {node.title}
                </h2>
                <p className="text-sm text-neutral-600">
                  ${node.priceRange.minVariantPrice.amount}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
