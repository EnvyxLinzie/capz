import Image from 'next/image'
import Tim from '@/public/images/tim.png'

export default function Target() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">Candra Apple Solution Team.</h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                <Image className="mx-auto md:max-w-none" src={Tim} width={540} height={520} alt="Features 02" />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">Bidang Professional Tim Kami</div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-purple-600">.</span> Customer Service</h4>
                    <p className="text-lg text-gray-400">Siap melayani pelanggan yang datang langsung maupun secara online.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-teal-500">.</span> Teknisi</h4>
                    <p className="text-lg text-gray-400">Kami memiliki tim teknisi yang professional dan sudah berpengalaman.</p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2"><span className="text-pink-500">.</span> Digital Marketing</h4>
                    <p className="text-lg text-gray-400">Tim kami memberikan informasi di dunia digital agar mempermudah informasi diakses oleh pelanggan kami.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
