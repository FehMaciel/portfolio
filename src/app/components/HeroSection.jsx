"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
    const handleClick = () => {
        // Encontrar o elemento da seção para a qual você deseja rolar
        const section = document.getElementById('contato'); // Substitua 'suaSecao' pelo ID da sua seção alvo

        // Verificar se o elemento foi encontrado
        if (section) {
            // Rolar suavemente até a seção
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-3xl lg:text-5xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'> Olá, Eu Sou {""}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Felippe',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                                'Bot Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}

                            repeat={Infinity}
                        /></h1>
                    <p className='tetx-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan enim sodales nisi pharetra, ut accumsan odio sollicitudin.</p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary to-secondary hover:bg-slate-200 text-white' onClick={handleClick}>Entre em Contato</button>
                        <button className='px-0.5 py-0.5 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary to-secondary mr-4 bg-transparent hover:bg-slate-800 text-white  mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Dowload CV</span></button>
                    </div>
                </div>

                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
                        <Image
                            src="/images/avatar.png"
                            alt='Avatar'
                            width={300}
                            height={300}
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'

                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection