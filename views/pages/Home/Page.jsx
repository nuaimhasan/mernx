export default function Home() {
  return (
    <>
      {/* banner */}
      <section className="h-[90vh] flex justify-center items-center">
        <div className="container">
          <div className="sm:w-2/3 mx-auto text-center">
            <h1 className="mb-4">Welcome to MERN-X</h1>
            <h2 className="text-7xl gradient_heading">
              Streamlined Full-Stack Development Framework
            </h2>
            <p className="text-lg mt-3 text-gray-500">
              MERN-X Create by Rabbil Hasan Rupom. <br /> Design by Nuaim Hasan
              Nasim.
            </p>

            <div className="flex justify-center mt-4 gap-4">
              <a
                href="https://mernx.com/"
                target="_blank"
                className="bg-black text-white px-4 py-1.5 rounded"
              >
                Learn About MERN-X
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
