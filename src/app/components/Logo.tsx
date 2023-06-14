import Image from 'next/image';

const Logo = () => {
    return(
    <div className='nasara_logo-container'>

    <Image
      src="/nasara_logo.svg" // Path to the SVG file in the /public folder
      alt="Nasara Logo"
      width={200}
      height={200}
    />
  </div>
    )
}

export default Logo;