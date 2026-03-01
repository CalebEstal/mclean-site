// src/app/shop/[handle]/page.tsx
import { shopifyFetch } from "@/lib/shopify";
import { notFound } from "next/navigation";

const PRODUCT_QUERY = `
  query Product($handle: String!) {
    product(handle: $handle) {
      title
      description
      priceRange {
        minVariantPrice {
          amount
        }
      }
      featuredImage {
        url
        altText
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;

  const data = await shopifyFetch<any>({
    query: PRODUCT_QUERY,
    variables: { handle },
  });

  const product = data.product;
  if (!product) notFound();

  return (
    <main className="bg-neutral-50">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-start">
          {/* Image */}
          <div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
            {product.featuredImage && (
              <img
                src={product.featuredImage.url}
                alt={product.featuredImage.altText ?? product.title}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          {/* Content */}
          <div className="max-w-md space-y-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
                {product.title}
              </h1>
              <p className="text-xl text-neutral-700">
                ${product.priceRange.minVariantPrice.amount}
              </p>
            </div>

            <p className="text-neutral-600 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <button className="w-full bg-neutral-900 text-white py-3 rounded-sm hover:bg-neutral-800 transition">
                Buy now
              </button>

              <p className="text-xs text-neutral-500 leading-relaxed">
                Custom built to order. Shipping included within the continental U.S.
                Production timelines confirmed after purchase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
