import Image from 'next/image'

import HeroImage from '@/public/images/hero-features.jpg'

export default function HeroFeatures() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-64 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="600">
          <svg className="max-w-full" width="552" height="564" viewBox="0 0 552 564" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="paint0_linear" x1="-2.963" y1="307.099" x2="290.505" y2="577.859" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5D5DFF" stopOpacity=".01" />
                <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
              </linearGradient>
            </defs>
            <path fillRule="evenodd" clipRule="evenodd" d="M541.826 279.309l-.862 3.213c-3.835 14.371-7.136 27.538-10.103 39.522l-3.832 15.513c-20.139 81.338-29.804 110.701-124.506 167.602l-3.631 2.178c-58.811 35.207-93.502 52.607-128.824 55.931-36.614 3.445-73.028-7.913-134.355-41.908-61.326-33.993-90.255-58.855-106.735-91.732-13.416-26.763-18.095-58.455-20.015-108.876-4.816-16.192-7.996-30.7-8.23-44.164-.068-3.833.104-7.58.544-11.258l-.006-.317c-.109-6.266.278-12.126 1.207-17.746.21-6.776.892-13.086 2.1-19.106.553-7.353 1.554-14.171 3.068-20.641.928-7.962 2.278-15.315 4.124-22.258 2.501-16.126 6.382-29.825 12.2-42.519 15.323-33.432 43.366-59.288 103.469-95.402C187.542 11.227 223.537-1.395 260.25.77c35.778 2.11 71.413 18.598 132.542 52.419l6.606 3.657 21.031 11.6c100.113 55.29 154.127 89.242 121.397 210.862zm-9.761-74.42c-.544-31.166-12.809-51.192-38.603-63.892-27.581-13.58-69.828-18.806-123.169-24.894l-14.192-1.617c-2.513-.287-5.05-.577-7.611-.873l-2.569-.296c-84.002-9.717-112.11-8.859-140.111-3.463-35.647 6.87-67.812 22.914-118.676 59.201-44.116 31.471-66.968 53.271-77.301 74.377-.158 12.961-.044 27.218.232 43.041l.098 5.332.035 1.751.236 3.494.246 3.555c.152 2.166.304 4.3.457 6.403l.405 3.243.417 3.298c.255 1.999.509 3.968.762 5.907l.55 2.93c.186.985.375 1.979.566 2.98l.696 3.628.346 1.787 1.03 3.983.352 1.35c.429 1.644.855 3.263 1.278 4.858l1.088 3.233.557 1.644c15.135 44.535 26.17 68.649 47.955 85.236 21.878 16.659 55.691 26.075 120.598 33.584 65.802 7.612 103.08 6.587 137.544-3.781 33.964-10.217 64.566-29.582 116.306-66.493 79.942-57.031 83.495-77.632 86.961-133.212l.727-11.8c.538-8.585 1.182-18.047 2.139-28.453.52-5.649.739-10.993.651-16.041zm-31.752-63.551c-27.128-16.515-69.646-24.652-123.387-34.51l-12.435-2.28c-2.495-.458-5.015-.922-7.558-1.392l-2.551-.472c-83.391-15.45-111.501-16.161-139.732-11.94-35.941 5.372-68.875 20.906-121.516 57.317-48.49 33.54-72.481 56.648-82.976 80.383a702.43 702.43 0 00-.258 10.442c11.157-20.338 33.613-41.17 76.072-71.459 50.468-36.004 83.961-52.696 119.459-59.537 34.693-6.685 72.056-4.422 136.727 2.981l9.114 1.049 22.692 2.59c108.11 12.381 167.25 21.684 159.442 106.603-1.08 11.737-1.761 22.278-2.341 31.71l-.591 9.6.384-3.653c.915-8.636 1.971-18.066 3.328-28.336 5.786-43.83-4.657-71.309-33.873-89.096zm14.917 233.16l-.279.791c-13.739 38.737-36.802 64.438-102.187 105.256l-3.524 2.196c-57.073 35.504-90.894 53.354-125.996 58.303-36.383 5.131-73.265-3.347-136.08-31.282-62.83-27.941-92.884-49.236-110.886-78.572-13.937-22.712-20.19-49.937-24.447-92.303l.144 2.374c2.411 38.523 7.442 64.833 18.79 87.471 16.28 32.473 44.986 57.104 105.918 90.879 60.932 33.776 97.031 45.069 133.196 41.665 35.659-3.355 70.852-21.322 131.614-57.831 77.855-46.778 97.816-74.815 113.737-128.947zm24.02-166.138c-.515-29.45-10.91-50.496-32.114-66.251-25.44-18.904-65.714-30.113-116.569-43.381l-17.201-4.477-7.475-1.95-6.433-1.684C296.141 74.102 259.377 66.916 224.444 70.52c-36.155 3.73-69.831 18.666-124.247 55.105-53.68 35.945-78.703 60.557-89.252 87.783l-.103.269a481.865 481.865 0 00-.494 9.658c11.503-22.731 35.092-44.717 81.648-76.919 52.242-36.134 86.547-52.297 122.357-57.65 35-5.232 72.208-.593 136.427 11.22l9.051 1.671 22.534 4.136c107.32 19.75 165.905 33.296 153.803 124.903l-.366 2.807c-1.435 11.142-2.523 21.275-3.477 30.453l-1.198 11.534.526-3.642c1.366-9.422 2.915-19.719 4.817-30.935 2.013-11.87 2.952-22.686 2.78-32.553zm-25.335-65.012c-24.186-21.769-63.253-36.211-112.611-53.337l-20.99-7.264-13.17-4.571c-61.229-21.162-97.191-30.887-131.891-29.034-36.287 1.936-70.671 16.178-126.865 52.545-55.444 35.883-81.693 61.143-93.618 90.092a103.568 103.568 0 00-2.773 7.554 343.41 343.41 0 00-.726 8.161c11.817-25.861 36.465-49.147 87.813-83.531C153.1 87.792 188.19 72.25 224.24 68.53c35.236-3.635 72.17 3.576 135.73 20.153l8.934 2.337c3.332.87 6.623 1.727 9.872 2.572l9.118 2.372c108.26 28.192 167.441 45.659 150.548 145.284l-.492 2.929c-2.018 12.116-3.631 23.137-5.061 33.112l-1.796 12.536 1.394-7.672a1499.342 1499.342 0 014.815-25.201l.917-4.523c10.428-50.927 2.931-84.57-24.304-109.081zm5.21 211.33l-.151.469c-11.791 35.981-33.306 60.707-95.244 101.005l-1.889 1.226c-57.396 37.145-90.961 55.978-126.481 62.543-36.074 6.665-73.287.858-137.304-21.431-64.045-22.298-95.051-40.254-114.406-66.25-15.006-20.158-22.527-44.882-28.767-83.668l.255 2.175c4.206 35.295 10.455 59.208 22.844 79.396 17.587 28.661 46.983 49.612 108.131 76.961l1.863.831c62.434 27.764 99.019 36.201 134.988 31.128 35.461-5.001 69.769-23.4 128.741-60.215 75.348-47.037 94.065-73.846 107.42-124.17zm26.933-142.436c-.481-27.519-8.836-49.124-25.435-67.155-23.301-25.313-62.163-43.385-111.328-65.162l-19.027-8.414-4.834-2.143-6.218-2.76c-61.203-27.105-96.991-40.02-132.089-40.037-35.962-.017-70.679 13.162-127.609 48.535l-1.732 1.08c-57.947 36.173-84.534 61.202-98.097 92.341-2.393 5.497-4.365 11.174-5.962 17.166a238.28 238.28 0 00-.742 5.168l-.064.157c12.253-29.747 37.834-54.414 94.382-91.01 56.518-36.578 91.168-50.906 127.844-52.864 36.107-1.927 73.399 8.506 138.408 31.14l4.958 1.722 21.967 7.602c104.589 36.253 161.387 59.285 139.698 165.223-2.441 11.923-4.493 22.896-6.32 32.948l-3.222 17.879-.306 1.695 1.427-6.617c2.242-10.339 4.735-21.565 7.621-33.7 4.703-19.77 6.951-37.23 6.68-52.794zm-23.949 123.973l-.061.205c-10.197 34.05-30.839 58.075-92.231 99.185l-3.307 2.211c-53.567 35.76-85.596 54.265-120.045 62.044-35.695 8.06-73.114 4.722-138.065-12.314-64.991-17.046-96.792-31.88-117.337-54.731-15.922-17.71-24.594-40.003-32.633-75.248 5.9 33.185 13.276 55.279 26.825 73.479 18.842 25.308 50.652 43.688 113.459 65.555 63.652 22.161 100.588 27.948 136.283 21.353 35.187-6.504 68.587-25.256 125.756-62.255 72.848-47.146 90.372-72.766 101.356-119.484zm27.201-122.061c-.461-26.399-7.754-48.004-22.071-66.782-21.991-28.84-59.886-50.725-107.884-77.233l-18.574-10.242-10.787-5.968C330.251 20.94 295.171 4.834 260.13 2.767 223.869.63 188.185 13.174 128.469 49.056c-59.716 35.882-87.545 61.498-102.68 94.52-3.862 8.424-6.86 17.309-9.163 27.081.397-.981.807-1.957 1.23-2.928 13.743-31.555 40.54-56.826 98.871-93.24 58.316-36.406 93.658-49.935 130.402-49.917 35.812.017 72.16 13.251 134.773 41.038l6.768 3.006c2.416 1.07 4.81 2.13 7.181 3.178l11.177 4.94C511.649 123.011 568.623 150.72 541.324 265.5l-.73 3.086c-3.127 13.286-5.787 25.458-8.171 36.544l-3 13.992-.68 3.159 1.708-6.886c2.563-10.286 5.38-21.391 8.565-33.328l.878-3.276c6.582-24.46 9.745-45.773 9.416-64.636zm-25.085 104.979l-.358 1.293c-8.786 31.148-28.567 54.261-87.102 94.746l-3.198 2.209c-51.815 35.733-82.927 54.455-116.952 63.451-34.901 9.227-72.015 8.283-136.443-3.537l-1.961-.361c-65.685-12.169-98.132-24.091-119.716-43.984-17.464-16.096-27.296-38.17-35.855-66.34 7.368 29.508 15.729 49.093 29.91 64.868 19.995 22.237 52.617 37.414 116.357 54.133 64.606 16.946 101.769 20.279 137.117 12.297 34.843-7.867 67.321-26.895 122.68-63.965 70.314-47.084 86.722-71.552 95.521-114.81zm1.357-15.973l-.268 1.088c-7.246 28.819-25.623 50.972-80.879 90.57l-1.686 1.205c-24.552 17.515-44.685 31.412-63.14 42.308-19.564 11.55-36.643 19.326-53.751 24.472-34.753 10.455-72.25 11.499-138.349 3.852-66.15-7.651-99.101-16.861-121.582-33.977-18.179-13.843-29.03-33.572-38.887-58.959 8.713 26.591 17.961 44.074 32.81 57.76 21.003 19.357 54.29 31.55 118.725 43.489l3.885.713c62.923 11.428 99.406 12.27 133.643 3.218 34.432-9.104 65.976-28.333 119.526-65.371 67.872-46.945 83.175-70.301 89.953-110.368z" fill="url(#paint0_linear)" />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Dapatkan layanan terbaik dari kami</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Kami memberikan layanan terbaik dari setiap jasa yang kami tawarkan.</p>
          </div>
          {/* Image */}
          <Image className="mx-auto" src={HeroImage} width={768} height={432} alt="Hero" priority data-aos="fade-up" data-aos-delay="400" />
        </div>

      </div>
    </section>
  )
}
