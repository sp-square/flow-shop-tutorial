import { products } from "@wix/stores";
import Link from "next/link";
import WixImage from "./WixImage";

interface ProductProps {
  product: products.Product;
}

export default function Product({ product }: ProductProps) {
  const mainImage = product.media?.mainMedia?.image;

  return (
    <Link href={`/products/${product.slug}`} className="h-full border bg-card">
      <div className="overflow-hidden">
        <WixImage
          mediaIdentifier={mainImage?.url}
          alt={mainImage?.altText}
          className="transition-transform duration-300 hover:scale-105"
          width={700}
          height={700}
        />
      </div>
      <div className="space-y-3 p-3">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: product.description || "" }}
          className="line-clamp-5"
        />
      </div>
    </Link>
  );
}
