import Image from 'next/image';

export default function Clients() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Partner Kami</h1>
            <p className="text-xl text-gray-400">Dibawah ini adalah partner resmi Candra Apple Solution di berbagai bidang.</p>
          </div>

          {/* Items */}
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4" data-aos-id-clients>

          {/* Item */}
          <div className="flex items-center justify-center h-24 border border-gray-700 p-2" data-aos="fade-up" data-aos-anchor="[data-aos-id-clients]">
            <Image
              src="/images/alifbaa.png"
              alt="Logo 1"
              width={124}  // Set the appropriate width
              height={24}  // Set the appropriate height
              className="max-w-full"
            />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center h-24 border border-gray-700 p-2" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-clients]">
            <Image
              src="/images/capsacademy.png"
              alt="Logo 2"
              width={100}  // Set the appropriate width
              height={50}  // Set the appropriate height
              className="max-w-full"
            />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center h-24 border border-gray-700 p-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-clients]">
            <Image
              src="/images/capscyber.png"
              alt="Logo 3"
              width={190}  // Set the appropriate width
              height={80}  // Set the appropriate height
              className="max-w-full"
            />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center h-24 border border-gray-700 p-2" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-clients]">
            <Image
              src="/images/capspoint.png"
              alt="Logo 4"
              width={80}  // Set the appropriate width
              height={20}  // Set the appropriate height
              className="max-w-full"
            />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center h-24 border border-gray-700 p-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-clients]">
            <Image
              src="/images/horizonfx.png"
              alt="Logo 5"
              width={190}  // Set the appropriate width
              height={80}  // Set the appropriate height
              className="max-w-full"
            />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center h-24 border border-gray-700 p-2" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-clients]">
            <Image
              src="/images/reta.png"
              alt="Logo 6"
              width={150}  // Set the appropriate width
              height={30}  // Set the appropriate height
              className="max-w-full"
            />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center h-24 border border-gray-700 p-2" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-clients]">
            <Image
              src="/images/riverstreet.png"
              alt="Logo 7"
              width={180}  // Set the appropriate width
              height={80}  // Set the appropriate height
              className="max-w-full"
            />
          </div>

          {/* Item */}
          <div className="flex items-center justify-center h-24 border border-gray-700 p-2" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-clients]">
            <Image
              src="/images/vizta.png"
              alt="Logo 8"
              width={126}  // Set the appropriate width
              height={36}  // Set the appropriate height
              className="max-w-full"
            />
          </div>

          </div>
        </div>
      </div>
    </section>
  )
}
