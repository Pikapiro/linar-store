import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products:string[] = ['בונדטק','אקריל','P.C uv','FR P.V.D.F','PVC FOAM']
  // const billboard = await getBillboard("");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard 
          data={billboard}
        />
  */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="מוצרים שלנו" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
