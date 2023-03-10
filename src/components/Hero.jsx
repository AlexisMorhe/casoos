import Button from "@/components/Button";
import LogoCloud from "@/components/LogoCloud";
import {useContext} from "react";
import {useRouter} from "next/router";
import {UserContext} from "../../context/userContext";

export default function Hero() {
  const router = useRouter();
  const {setUserType} = useContext(UserContext);

  const handleClick = (userType) => {
    setUserType(userType);
    router.push('/registro')
  }

  return (
    <div className="isolate bg-white pt-14 pb-24 sm:pt-24 text-slate-900">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#cbd5e1" />
              <stop offset={1} stopColor="#64748b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative w-full px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 sm:pt-48">
          <h1 className="text-4xl font-lexend tracking-tight sm:text-center sm:text-6xl">
            La solución <strong className='text-sky-900'>todo en uno</strong> para tu proceso legal.
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            ¡Con nuestra plataforma, puedes simplificar tu proceso legal y enfocarte en lo que realmente importa: tu caso y tu éxito!
          </h2>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <Button onClick={() => handleClick('lawyer')} height='tall' color='blue'>Soy un abogado</Button>
            <Button onClick={() => handleClick('client')} variant='outline' color='blue'>Busco un abogado</Button>
          </div>
        </div>
        <LogoCloud/>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#cbd5e1" />
                <stop offset={1} stopColor="#64748b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}